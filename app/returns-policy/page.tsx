import React from 'react';
import Link from 'next/link';

export default function ReturnsPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Returns Policy
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our commitment to customer satisfaction and quality.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Returns Promise</h3>
              <p>
                At StickerFly, we take pride in the quality of our products and want you to be completely satisfied with your purchase. We understand that sometimes products may not meet your expectations, which is why we offer a fair and straightforward returns policy.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-8 border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900">Returns Period</h4>
                <p className="mt-2">
                  You may return items within <strong>14 days</strong> of receipt. To be eligible for a return, please contact our customer service team within this timeframe to initiate the process.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eligible Returns</h3>
              <p>
                Due to the custom nature of our products, we can only accept returns for the following reasons:
              </p>
              <ul className="list-disc pl-5 mt-2 mb-6">
                <li>Defective items (poor print quality, peeling, fading)</li>
                <li>Incorrect items received (wrong design, size, or quantity)</li>
                <li>Damaged items during shipping</li>
                <li>Items that significantly differ from what was advertised</li>
              </ul>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Returnable Items</h3>
                <p>
                  The following items cannot be returned:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li>Custom-designed stickers that meet our quality standards but don't match your expectations due to design choices</li>
                  <li>Items that have been used, applied, or damaged after delivery</li>
                  <li>Items returned more than 14 days after delivery</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Return Process</h3>
                <p>
                  To initiate a return, please follow these steps:
                </p>
                <ol className="list-decimal pl-5 mt-2 mb-6">
                  <li>Contact our customer service team at <a href="mailto:returns@stickerfly.com" className="text-primary-600 hover:text-primary-500">returns@stickerfly.com</a> or through our <Link href="/contact" className="text-primary-600 hover:text-primary-500">contact form</Link></li>
                  <li>Include your order number and reason for return</li>
                  <li>Attach clear photos showing the issue with the product</li>
                  <li>Our team will review your request and provide further instructions</li>
                  <li>If approved, you'll receive a return authorization and shipping instructions</li>
                </ol>
                <p className="text-sm italic">
                  Please do not send returns without contacting us first and receiving authorization.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refunds</h3>
                <p>
                  Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                </p>
                <p className="mt-2">
                  If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
                </p>
                <h4 className="text-lg font-medium text-gray-900 mt-4">Refund Options:</h4>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li>Full refund to original payment method</li>
                  <li>Store credit (with an additional 10% bonus)</li>
                  <li>Replacement of the item</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Return Shipping</h3>
                <p>
                  For returns due to our error (wrong item, defective product, etc.), we will cover the return shipping costs. We'll either send you a prepaid shipping label or reimburse your shipping expenses.
                </p>
                <p className="mt-2">
                  For returns due to customer preference or ordering mistakes, the customer is responsible for return shipping costs.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
                <p>
                  All StickerFly products come with our quality guarantee. If your stickers fade, peel, or deteriorate under normal conditions within 3 years of purchase, we'll replace them free of charge.
                </p>
                <p className="mt-2">
                  This guarantee does not cover damage from improper use, extreme weather conditions, or intentional damage.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p>
                  If you have any questions about our returns policy, please contact us:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> <a href="mailto:returns@stickerfly.com" className="text-primary-600 hover:text-primary-500">returns@stickerfly.com</a></p>
                  <p><strong>Phone:</strong> 0800 123 4567 (Mon-Fri, 9am-5pm)</p>
                  <p className="mt-2">
                    <Link href="/contact" className="text-primary-600 hover:text-primary-500">
                      Contact form →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6 text-sm text-gray-500">
                <p>
                  This returns policy was last updated on June 14, 2025.
                </p>
                <p className="mt-1">
                  StickerFly reserves the right to update or modify this policy at any time without prior notice. Any changes will be posted on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 