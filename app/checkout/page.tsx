'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState({
    productId: '',
    quantity: 0,
    size: '',
    total: 0
  });

  useEffect(() => {
    const productId = searchParams.get('product') || '';
    const quantity = parseInt(searchParams.get('quantity') || '0');
    const size = searchParams.get('size') || '';
    
    // Calculate total based on quantity and size
    let basePrice = 3.99; // Default price
    if (size.includes('3x3')) basePrice = 4.99;
    else if (size.includes('4x4')) basePrice = 5.99;
    else if (size.includes('5x5')) basePrice = 6.99;
    else if (size.includes('6x6')) basePrice = 7.99;
    
    let total = basePrice * quantity;
    
    // Apply volume discounts
    if (quantity >= 100) {
      total = total * 0.7; // 30% discount
    } else if (quantity >= 50) {
      total = total * 0.8; // 20% discount
    } else if (quantity >= 25) {
      total = total * 0.9; // 10% discount
    }
    
    setOrderDetails({
      productId,
      quantity,
      size,
      total
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Custom Product Created Successfully!
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Your custom sticker design has been processed and is ready for checkout.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Product</dt>
                  <dd className="text-sm font-medium text-gray-900">Custom Sticker</dd>
                </div>
                
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Size</dt>
                  <dd className="text-sm font-medium text-gray-900">{orderDetails.size}</dd>
                </div>
                
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Quantity</dt>
                  <dd className="text-sm font-medium text-gray-900">{orderDetails.quantity} stickers</dd>
                </div>
                
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="text-base font-medium text-gray-900">${orderDetails.total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
            
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Demo Mode
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>This is a demonstration of the checkout process. In production, this would integrate with a payment processor like Stripe or PayPal.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Link
                href="/custom-order"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Back to Custom Order
              </Link>
              
              <button
                type="button"
                className="bg-primary-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={() => alert('In production, this would process the payment and create the order.')}
              >
                Complete Order (Demo)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 