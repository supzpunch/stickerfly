import React from 'react';
import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Shipping Information
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to know about our shipping process and delivery times.
            </p>
            <div className="mt-8 flex items-center">
              <Link href="/" className="text-primary-600 hover:text-primary-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="prose prose-lg text-gray-500 mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UK Shipping</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Royal Mail 24 Service
                </h4>
                <p className="mt-2">
                  All UK orders are shipped via Royal Mail 24 service, which typically delivers within 1-2 business days after your order has been produced and dispatched.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free shipping on all UK orders over £30</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>£3.95 flat rate shipping for orders under £30</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tracking information provided via email</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Timeline</h3>
              <p>
                Before your order ships, we need to produce your stickers. Here's our typical production timeline:
              </p>
              <ul className="list-disc pl-5 mt-2 mb-6">
                <li>Standard orders: 2-3 business days</li>
                <li>Custom or bulk orders: 3-5 business days</li>
                <li>Rush production (additional fee): 1-2 business days</li>
              </ul>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">International Shipping</h3>
                <p>
                  We ship to most countries worldwide using various international carriers. Delivery times and rates vary by location:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li>Europe: 3-7 business days (£8.95)</li>
                  <li>USA & Canada: 7-14 business days (£12.95)</li>
                  <li>Rest of World: 10-21 business days (£14.95)</li>
                </ul>
                <p className="text-sm italic">
                  Please note that international customers are responsible for any customs fees, import taxes, or duties that may apply.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Tracking</h3>
                <p>
                  Once your order has been dispatched, you'll receive a confirmation email with tracking information. You can also track your order by:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li>Logging into your StickerFly account</li>
                  <li>Using the tracking number provided in your dispatch email</li>
                  <li>Contacting our customer service team</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipping FAQs</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">What if my order hasn't arrived within the expected timeframe?</h4>
                    <p className="mt-1">
                      If your order hasn't arrived within the expected delivery window, please contact our customer service team. For UK orders, we'll typically wait 3 business days past the expected delivery date before investigating.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Do you offer expedited shipping?</h4>
                    <p className="mt-1">
                      Yes, we offer expedited shipping options for UK customers. Please contact our customer service team for availability and pricing.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Can I change my shipping address after placing an order?</h4>
                    <p className="mt-1">
                      We can only change your shipping address if your order hasn't been processed yet. Please contact us as soon as possible if you need to update your delivery information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p>
                  If you have any questions about shipping or delivery, please don't hesitate to contact our customer service team:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> <a href="mailto:shipping@stickerfly.com" className="text-primary-600 hover:text-primary-500">shipping@stickerfly.com</a></p>
                  <p><strong>Phone:</strong> 0800 123 4567 (Mon-Fri, 9am-5pm)</p>
                  <p className="mt-2">
                    <Link href="/contact" className="text-primary-600 hover:text-primary-500">
                      Contact form →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 