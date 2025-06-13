'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isCustom: boolean;
  sizes: {
    width: number;
    height: number;
    unit: string;
  }[];
  minQuantity: number;
}

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(10);
  const [selectedSize, setSelectedSize] = useState<{width: number, height: number, unit: string} | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id as string);
    }
  }, [params.id]);

  const fetchProduct = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      const data = await response.json();
      setProduct(data.product);
      
      // Set default selected size if available
      if (data.product.sizes && data.product.sizes.length > 0) {
        setSelectedSize(data.product.sizes[0]);
      }
      
      // Set default quantity
      if (data.product.minQuantity) {
        setQuantity(data.product.minQuantity);
      }
      
      setError('');
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Failed to load product. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    if (!product) return 0;
    
    // Base price
    let total = product.price;
    
    // Multiply by quantity with volume discount
    if (quantity >= 100) {
      total = total * quantity * 0.7; // 30% discount for 100+ stickers
    } else if (quantity >= 50) {
      total = total * quantity * 0.8; // 20% discount for 50+ stickers
    } else if (quantity >= 25) {
      total = total * quantity * 0.9; // 10% discount for 25+ stickers
    } else {
      total = total * quantity;
    }
    
    return total;
  };

  const handleAddToCart = () => {
    if (!session) {
      router.push('/login?redirect=cart');
      return;
    }
    
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    
    // Navigate to checkout with product details
    router.push(`/checkout?product=${product?._id}&quantity=${quantity}&size=${selectedSize.width}x${selectedSize.height}${selectedSize.unit}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-2">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  {error || 'Product not found'}
                </p>
              </div>
            </div>
          </div>
          <Link 
            href="/products" 
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link href="/products" className="ml-4 text-gray-400 hover:text-gray-500">
                    Products
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <span className="ml-4 text-gray-500 font-medium truncate">
                    {product.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                <div className="relative h-96 w-full">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h1>
                  {product.isCustom && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Custom
                    </span>
                  )}
                </div>
                
                <div className="mt-4">
                  <p className="text-xl font-medium text-gray-900">
                    ${product.price.toFixed(2)} per sticker
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Description</h3>
                  <div className="mt-2 text-gray-600">
                    <p>{product.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`relative border rounded-md p-3 flex items-center justify-center ${
                          selectedSize?.width === size.width && 
                          selectedSize?.height === size.height && 
                          selectedSize?.unit === size.unit
                            ? 'border-primary-500 ring-2 ring-primary-500'
                            : 'border-gray-300'
                        }`}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          {size.width}" × {size.height}"
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                  <select
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  >
                    <option value="10">10 stickers</option>
                    <option value="25">25 stickers (10% off)</option>
                    <option value="50">50 stickers (20% off)</option>
                    <option value="100">100 stickers (30% off)</option>
                    <option value="250">250 stickers (30% off)</option>
                    <option value="500">500 stickers (30% off)</option>
                  </select>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-medium text-gray-900">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Price includes production, cutting, and shipping within the US.
                  </p>
                </div>

                {error && (
                  <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full bg-primary-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-900">Features</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-500">Weather-resistant for 3+ years</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-500">Scratch-resistant solvent-based ink</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-500">Precision die-cut to your exact shape</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 