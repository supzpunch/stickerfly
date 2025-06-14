import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/models/Order';
import { getServerSession } from 'next-auth';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Mock orders for development
const mockOrders = [
  {
    _id: 'mock-order-1',
    user: {
      name: 'John Doe',
      email: 'john@example.com'
    },
    status: 'processing',
    totalAmount: 29.99,
    createdAt: new Date().toISOString(),
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      country: 'USA'
    }
  },
  {
    _id: 'mock-order-2',
    user: {
      name: 'Jane Smith',
      email: 'jane@example.com'
    },
    status: 'shipped',
    totalAmount: 45.50,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    shippingAddress: {
      name: 'Jane Smith',
      street: '456 Oak Ave',
      city: 'Another City',
      state: 'NY',
      zip: '67890',
      country: 'USA'
    }
  }
];

// GET all orders (admin only)
export async function GET(request: Request) {
  try {
    const isDev = process.env.NODE_ENV === 'development';
    
    if (isDev && !process.env.MONGODB_URI) {
      console.log('Development mode: Returning mock orders');
      return NextResponse.json({ orders: mockOrders });
    }

    const session = await getServerSession();

    if (!session || !session.user || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized - Admin only' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    const query: any = {};
    
    if (status) {
      query.status = status;
    }
    
    await connectToDatabase();
    const orders = await Order.find(query)
      .populate('user', 'name email')
      .populate('items.product')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    
    // Fallback to mock data in development if there's an error
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      console.log('Error occurred, falling back to mock orders');
      return NextResponse.json({ orders: mockOrders });
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
} 