'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isCustom: boolean;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'logo', name: 'Logo Stickers' },
    { id: 'character', name: 'Character Stickers' },
    { id: 'decorative', name: 'Decorative Stickers' },
    { id: 'custom', name: 'Custom Designs' },
  ];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      const url = selectedCategory === 'all' 
        ? '/api/products' 
        : `/api/products?category=${selectedCategory}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data.products);
      setError('');
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <span className="text-3xl mr-3 animate-pulse">🪰</span>
            <h1 className="text-3xl font-bold text-gray-900">Browse Products</h1>
            <span className="text-3xl ml-3 animate-pulse">🪰</span>
          </div>
          <p className="text-center text-gray-600 mt-2">Let your creativity fly with our premium sticker collection!</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="sm:hidden">
              <label htmlFor="category-select" className="sr-only">
                Select a category
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Categories">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-500 hover:text-gray-700'
                    } px-3 py-2 font-medium text-sm rounded-md`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Custom Sticker CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg shadow-xl mb-8">
            <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Create Your Own Custom Stickers
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-primary-100">
                  Upload your own design and we'll turn it into high-quality, weather-resistant stickers.
                  Perfect for branding, events, or personal projects.
                </p>
                <div className="mt-8">
                  <Link
                    href="/custom-order"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                  >
                    Design Your Sticker
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="h-40 w-40 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-bounce mb-4 text-4xl">
                🪰
              </div>
              <p className="mt-2 text-gray-500">Loading products... Watch them fly in!</p>
            </div>
          )}

          {/* Products Grid */}
          {!loading && products.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🪰</div>
              <p className="text-gray-500">No products found in this category.</p>
              <p className="text-gray-400 mt-2">Try a different category or check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link 
                  key={product._id} 
                  href={`/products/${product._id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-64 w-full bg-gray-200">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                          {product.name}
                        </h3>
                        {product.isCustom && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Custom
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 