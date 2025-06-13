import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/models/Order';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();

    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    // Find all orders for the current user
    const orders = await Order.find({ user: session.user.id })
      .populate('orderItems.product', 'name')
      .sort({ createdAt: -1 });

    return NextResponse.json({ orders });
  } catch (error: any) {
    console.error('Error fetching user orders:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
} 