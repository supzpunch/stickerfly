import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'How Custom Stickers Boost Customer Retention and Brand Loyalty',
      excerpt: 'Discover how branded stickers can turn one-time buyers into loyal customers and brand advocates.',
      date: 'June 14, 2025',
      author: 'Sarah Johnson',
      authorRole: 'Marketing Director',
      readTime: '8 min read',
      slug: 'stickers-customer-retention',
      image: 'https://images.unsplash.com/photo-1715192983279-96944f4b7a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZSUyMGN1dCUyMHN0aWNrZXJzfGVufDB8fDB8fHww',
      featured: true,
    },
    {
      id: 2,
      title: '5 Creative Ways to Use Custom Stickers in Your Marketing',
      excerpt: 'Explore innovative ways to incorporate stickers into your marketing strategy and boost brand visibility.',
      date: 'June 10, 2025',
      author: 'Mike Chen',
      authorRole: 'Creative Director',
      readTime: '6 min read',
      slug: 'creative-sticker-marketing',
      image: 'https://images.unsplash.com/photo-1615821044195-d158c5b986de?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false,
    },
    {
      id: 3,
      title: 'The Environmental Impact of Stickers: Choosing Sustainable Options',
      excerpt: 'Learn about eco-friendly sticker materials and production methods for environmentally conscious businesses.',
      date: 'June 5, 2025',
      author: 'Emma Thompson',
      authorRole: 'Sustainability Expert',
      readTime: '7 min read',
      slug: 'sustainable-stickers',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            StickerFly Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Tips, insights, and inspiration for your sticker projects
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="h-48 w-full relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={post.featured}
                  />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-600">
                    {post.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mr-2">
                        Featured
                      </span>
                    )}
                    <span>{post.date}</span>
                  </p>
                  <Link href={`/blog/${post.slug}`} className="block mt-2 group">
                    <p className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 font-medium text-sm">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{post.authorRole}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Stay Updated with StickerFly
            </h3>
            <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
              Get the latest tips, trends, and insights about custom stickers and branding delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-primary-600 hover:text-primary-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
