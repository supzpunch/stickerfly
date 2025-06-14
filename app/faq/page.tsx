import React from 'react';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can't find the answer you're looking for? Contact our{' '}
              <Link href="/contact" className="font-medium text-primary-600 hover:text-primary-500">
                customer support
              </Link>{' '}
              team.
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
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How long do StickerFly stickers last?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Our premium quality stickers are made with weather-resistant vinyl and UV-protective laminate. They typically last 3-5 years outdoors without fading or peeling, and even longer indoors.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What shipping methods do you offer?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We ship all orders via Royal Mail 24 service. Most UK deliveries arrive within 1-2 business days after production is complete. For international shipping options, please contact our customer service team.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How long does production take?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Standard orders are typically produced within 2-3 business days. For custom or bulk orders, production may take 3-5 business days. Rush production is available for an additional fee.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What file formats do you accept for custom stickers?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We accept PNG, JPEG, and SVG files for custom sticker orders. For best results, we recommend high-resolution PNG files with transparent backgrounds. The minimum resolution should be 300 DPI at the size you want your sticker printed.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Can I order custom shapes?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes! All our stickers are die-cut to the shape of your design. Simply upload your artwork with a clear outline, and we'll cut your stickers to match that shape perfectly.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What is your return policy?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We want you to be completely satisfied with your order. If you're not happy with your stickers, please contact us within 14 days of receiving your order. Please note that due to the custom nature of our products, we can only accept returns for defective items or errors on our part. Visit our <Link href="/returns-policy" className="text-primary-600 hover:text-primary-500">Returns Policy</Link> page for more details.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you offer bulk discounts?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes! We offer progressive discounts starting at orders of 25 stickers or more. The more you order, the more you save - up to 30% off for orders of 500+ stickers. Bulk discounts are automatically applied at checkout.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Are your stickers waterproof?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes! Our stickers are made with waterproof vinyl and coated with a protective laminate that makes them resistant to water, sunlight, scratches, and most household cleaners. They're perfect for water bottles, laptops, cars, and outdoor use.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How can I track my order?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to check the status of your order at any time.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you ship internationally?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any customs fees or import taxes that may apply.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 