import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/models/Order';
import { getServerSession } from 'next-auth';

// GET all orders for the current user
export async function GET(request: Request) {
  try {
    const session = await getServerSession();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    const query: any = { user: session.user.id };
    
    if (status) {
      query.status = status;
    }
    
    await connectToDatabase();
    const orders = await Order.find(query)
      .populate('items.product')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST create new order
export async function POST(request: Request) {
  try {
    const session = await getServerSession();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // Validate required fields
    if (!data.items || !data.totalAmount || !data.shippingAddress || !data.paymentInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    const orderData = {
      ...data,
      user: session.user.id,
      status: 'pending'
    };
    
    const order = await Order.create(orderData);
    const populatedOrder = await Order.findById(order._id).populate('items.product');
    
    return NextResponse.json({ order: populatedOrder }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
} 