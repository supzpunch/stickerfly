import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/models/Order';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const isDev = process.env.NODE_ENV === 'development';

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

    // In development without MongoDB, return mock orders
    if (isDev && !process.env.MONGODB_URI) {
      console.log('Development mode: Returning mock orders for user');
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
      
      return NextResponse.json({ orders: mockOrders });
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