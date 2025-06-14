import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/models/Order';
import { getServerSession } from 'next-auth';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const isDev = process.env.NODE_ENV === 'development';

// GET single order by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;

    // In development without MongoDB, return mock order data
    if (isDev && !process.env.MONGODB_URI) {
      console.log('Development mode: Returning mock order for ID:', id);
      
      // Mock orders data matching the user orders API
      const mockOrders = [
        {
          _id: 'mock-order-1',
          user: session.user.id,
          orderItems: [
            {
              product: {
                _id: 'mock-product-1',
                name: 'Custom Logo Sticker'
              },
              quantity: 50,
              size: { width: 3, height: 3, unit: 'in' },
              customImageUrl: '/uploads/mock-image.jpg'
            }
          ],
          totalPrice: 149.99,
          status: 'processing',
          shippingAddress: {
            name: session.user.name || 'John Doe',
            street: '123 Mock Street',
            city: 'London',
            state: 'England',
            zip: 'SW1A 1AA',
            country: 'UK'
          },
          paymentInfo: {
            method: 'credit_card',
            transactionId: 'mock-txn-123',
            paid: true
          },
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          updatedAt: new Date()
        },
        {
          _id: 'mock-order-2',
          user: session.user.id,
          orderItems: [
            {
              product: {
                _id: 'mock-product-2',
                name: 'Business Card Stickers'
              },
              quantity: 100,
              size: { width: 2, height: 2, unit: 'in' },
              customImageUrl: '/uploads/mock-image-2.jpg'
            }
          ],
          totalPrice: 89.99,
          status: 'shipped',
          shippingAddress: {
            name: session.user.name || 'John Doe',
            street: '123 Mock Street',
            city: 'London',
            state: 'England',
            zip: 'SW1A 1AA',
            country: 'UK'
          },
          paymentInfo: {
            method: 'credit_card',
            transactionId: 'mock-txn-456',
            paid: true
          },
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
          updatedAt: new Date()
        },
        {
          _id: 'mock-order-3',
          user: session.user.id,
          orderItems: [
            {
              product: {
                _id: 'mock-product-3',
                name: 'Event Promotional Stickers'
              },
              quantity: 25,
              size: { width: 4, height: 4, unit: 'in' },
              customImageUrl: '/uploads/mock-image-3.jpg'
            }
          ],
          totalPrice: 199.99,
          status: 'delivered',
          shippingAddress: {
            name: session.user.name || 'John Doe',
            street: '123 Mock Street',
            city: 'London',
            state: 'England',
            zip: 'SW1A 1AA',
            country: 'UK'
          },
          paymentInfo: {
            method: 'credit_card',
            transactionId: 'mock-txn-789',
            paid: true
          },
          createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
          updatedAt: new Date()
        }
      ];

      const order = mockOrders.find(o => o._id === id);
      
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ order });
    }
    
    await connectToDatabase();
    const order = await Order.findById(id).populate('items.product');
    
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }
    
    // Check if the order belongs to the current user or user is admin
    if (order.user.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }
    
    return NextResponse.json({ order });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

// PUT update order status (admin only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();

    if (!session || !session.user || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized - Admin only' },
        { status: 403 }
      );
    }

    const { id } = await params;
    const data = await request.json();
    
    await connectToDatabase();
    
    const order = await Order.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    ).populate('items.product');
    
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ order });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
} 