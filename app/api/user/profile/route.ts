import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { connectToDatabase } from '@/lib/mongodb';
import { User } from '@/models/User';
import { authOptions } from '../../auth/options';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();
    
    const user = await User.findOne({ email: session.user.email }).select('-password');
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // Validate data
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    
    // Find user by email from session
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update user fields
    user.name = data.name;
    // Don't allow changing email to an existing one
    if (data.email !== user.email) {
      const existingUser = await User.findOne({ email: data.email });
      if (existingUser) {
        return NextResponse.json(
          { error: 'Email already in use' },
          { status: 400 }
        );
      }
      user.email = data.email;
    }
    
    // Update optional fields
    if (data.phone !== undefined) user.phone = data.phone;
    
    // Update address if provided
    if (data.address) {
      user.address = {
        street: data.address.street || '',
        city: data.address.city || '',
        state: data.address.state || '',
        zip: data.address.zip || '',
        country: data.address.country || 'United Kingdom',
      };
    }
    
    // Update preferences if provided
    if (data.preferences) {
      user.preferences = {
        emailNotifications: data.preferences.emailNotifications !== undefined 
          ? data.preferences.emailNotifications 
          : user.preferences?.emailNotifications || true,
        smsNotifications: data.preferences.smsNotifications !== undefined 
          ? data.preferences.smsNotifications 
          : user.preferences?.smsNotifications || false,
        marketingEmails: data.preferences.marketingEmails !== undefined 
          ? data.preferences.marketingEmails 
          : user.preferences?.marketingEmails || true,
      };
    }

    await user.save();

    return NextResponse.json({ 
      message: 'Profile updated successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        preferences: user.preferences
      }
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { error: 'Failed to update user profile' },
      { status: 500 }
    );
  }
} 