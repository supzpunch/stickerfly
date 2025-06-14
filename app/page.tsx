import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to StickerFly
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                High-quality custom stickers for your business, brand, or personal projects.
                Made in the UK, shipped nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                >
                  Shop Products
                </Link>
                <Link
                  href="/custom-order"
                  className="px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
                >
                  Create Custom Order
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-80 w-full md:h-96 mt-8 md:mt-0">
              <Image
                src="/images/stickerfly_main.jpg"
                alt="StickerFly - Custom Stickers for Your Business"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose StickerFly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">Our stickers are made with high-quality vinyl that lasts over 3 years outdoors.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Most orders ship within 2-3 business days, with express options available.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UK Made</h3>
              <p className="text-gray-600">All our stickers are designed and produced in the UK, supporting local businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Products</h3>
              <p className="text-gray-600 mb-4">
                Browse our collection of premium stickers and labels.
              </p>
              <div className="flex items-center text-primary-600">
                <span>View Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link
              href="/custom-order"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Custom Orders</h3>
              <p className="text-gray-600 mb-4">
                Create personalized stickers with your own designs.
              </p>
              <div className="flex items-center text-primary-600">
                <span>Start Custom Order</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link
              href="/blog"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Blog</h3>
              <p className="text-gray-600 mb-4">
                Tips and insights about stickers and branding.
              </p>
              <div className="flex items-center text-primary-600">
                <span>Read Articles</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Contact</h3>
              <p className="text-gray-600 mb-4">
                Get in touch with our friendly support team.
              </p>
              <div className="flex items-center text-primary-600">
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Admin Section - Only visible to admins */}
      <section className="container mx-auto px-4 py-8 border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Admin Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/admin/products"
              className="bg-white p-5 rounded-lg border border-gray-200 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Product Management</h3>
              <p className="text-gray-600 text-sm mt-1">Add, edit, and manage products</p>
            </Link>
            
            <Link
              href="/test-upload"
              className="bg-white p-5 rounded-lg border border-gray-200 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Test Upload</h3>
              <p className="text-gray-600 text-sm mt-1">Test and debug file upload functionality</p>
            </Link>
            
            <Link
              href="/api/debug-upload"
              className="bg-white p-5 rounded-lg border border-gray-200 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">Upload Debug Info</h3>
              <p className="text-gray-600 text-sm mt-1">View technical details about upload system</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 