'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Order {
  _id: string;
  orderItems: Array<{
    product: {
      name: string;
    };
    quantity: number;
  }>;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (status !== 'authenticated') return;
      
      try {
        setIsLoading(true);
        const response = await fetch('/api/orders/user');
        
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        
        const data = await response.json();
        setOrders(data.orders);
      } catch (err: any) {
        console.error('Error fetching orders:', err);
        setError(err.message || 'An error occurred while fetching your orders');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [status]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
          <p className="text-gray-500">Please wait while we load your dashboard.</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
        <p className="text-gray-600">Welcome back, {session?.user?.name}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">My Orders</h2>
            <p className="text-gray-600 mb-4">View and track your orders</p>
            <Link href="#orders" className="btn-primary inline-block">View Orders</Link>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
            <p className="text-gray-600 mb-4">Update your account information</p>
            <Link href="/dashboard/settings" className="btn-primary inline-block">Settings</Link>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">Custom Order</h2>
            <p className="text-gray-600 mb-4">Create a new custom sticker order</p>
            <Link href="/custom-order" className="btn-primary inline-block">Start Order</Link>
          </div>
        </div>
      </div>

      <div id="orders" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        
        {isLoading ? (
          <p className="text-gray-500">Loading your orders...</p>
        ) : error ? (
          <div className="bg-red-50 text-red-500 p-4 rounded-md">
            {error}
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-md text-center">
            <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
            <Link href="/products" className="btn-primary">Browse Products</Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Order ID</th>
                  <th className="py-3 px-4 text-left">Items</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="py-3 px-4">{order._id.substring(0, 8)}...</td>
                    <td className="py-3 px-4">
                      {order.orderItems.map((item, index) => (
                        <span key={index}>
                          {item.quantity} x {item.product.name}
                          {index < order.orderItems.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </td>
                    <td className="py-3 px-4">${order.totalPrice.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <Link href={`/orders/${order._id}`} className="text-primary-600 hover:text-primary-800">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 