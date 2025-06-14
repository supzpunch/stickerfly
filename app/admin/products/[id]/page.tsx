'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import ImageUploader from '../../../components/ImageUploader';

interface Size {
  width: number;
  height: number;
  unit: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  sizes: Size[];
  isCustom: boolean;
  featured: boolean;
  inStock: boolean;
}

export default function EditProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = useParams();
  const isNewProduct = id === 'new';
  
  const [product, setProduct] = useState<Product>({
    _id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: 'logo',
    sizes: [{ width: 3, height: 3, unit: 'in' }],
    isCustom: false,
    featured: false,
    inStock: true,
  });
  
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Redirect if not authenticated or not admin
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    if (status === 'authenticated') {
      if (session?.user?.role !== 'admin') {
        router.push('/dashboard');
        return;
      }

      if (!isNewProduct) {
        fetchProduct();
      }
    }
  }, [status, session, router, id, isNewProduct]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Failed to load product. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    try {
      const method = isNewProduct ? 'POST' : 'PUT';
      const url = isNewProduct ? '/api/products' : `/api/products/${id}`;
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save product');
      }
      
      setSuccess('Product saved successfully!');
      
      if (isNewProduct) {
        const data = await response.json();
        router.push(`/admin/products/${data.product._id}`);
      }
    } catch (error) {
      console.error('Error saving product:', error);
      setError(error instanceof Error ? error.message : 'Failed to save product');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setProduct(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setProduct(prev => ({ ...prev, [name]: parseFloat(value) }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSizeChange = (index: number, field: keyof Size, value: string | number) => {
    const newSizes = [...product.sizes];
    newSizes[index] = { ...newSizes[index], [field]: value };
    setProduct(prev => ({ ...prev, sizes: newSizes }));
  };

  const addSize = () => {
    setProduct(prev => ({
      ...prev,
      sizes: [...prev.sizes, { width: 3, height: 3, unit: 'in' }]
    }));
  };

  const removeSize = (index: number) => {
    const newSizes = [...product.sizes];
    newSizes.splice(index, 1);
    setProduct(prev => ({ ...prev, sizes: newSizes }));
  };

  if (status === 'loading' || (loading && !isNewProduct)) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-primary-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {isNewProduct ? 'Add New Product' : 'Edit Product'}
          </h1>
          <div className="flex space-x-3">
            <Link 
              href="/admin"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Back to Dashboard
            </Link>
            <Link 
              href="/products"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
              target="_blank"
            >
              View Products
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">{success}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  {/* Product Image */}
                  <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Image
                    </label>
                    {product.imageUrl ? (
                      <div className="mb-4">
                        <div className="relative h-64 w-full sm:w-96 mx-auto">
                          <Image 
                            src={product.imageUrl} 
                            alt={product.name} 
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                        <div className="mt-2 flex justify-center">
                          <button
                            type="button"
                            onClick={() => setProduct(prev => ({ ...prev, imageUrl: '' }))}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove Image
                          </button>
                        </div>
                      </div>
                    ) : (
                      <ImageUploader 
                        onImageUpload={(url) => setProduct(prev => ({ ...prev, imageUrl: url }))}
                        label="Upload Product Image"
                      />
                    )}
                  </div>

                  {/* Product Name */}
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="sm:col-span-2">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price (£)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={handleChange}
                        step="0.01"
                        min="0"
                        required
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="sm:col-span-3">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <div className="mt-1">
                      <select
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                      >
                        <option value="logo">Logo Stickers</option>
                        <option value="character">Character Stickers</option>
                        <option value="decorative">Decorative Stickers</option>
                        <option value="custom">Custom Designs</option>
                      </select>
                    </div>
                  </div>

                  {/* Flags */}
                  <div className="sm:col-span-3">
                    <fieldset className="space-y-3">
                      <legend className="text-sm font-medium text-gray-700">Product Options</legend>
                      <div className="flex items-center">
                        <input
                          id="featured"
                          name="featured"
                          type="checkbox"
                          checked={product.featured}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="featured" className="ml-3 block text-sm font-medium text-gray-700">
                          Featured Product
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="inStock"
                          name="inStock"
                          type="checkbox"
                          checked={product.inStock}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="inStock" className="ml-3 block text-sm font-medium text-gray-700">
                          In Stock
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="isCustom"
                          name="isCustom"
                          type="checkbox"
                          checked={product.isCustom}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="isCustom" className="ml-3 block text-sm font-medium text-gray-700">
                          Custom Product
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  {/* Sizes */}
                  <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Sizes
                    </label>
                    <div className="space-y-4">
                      {product.sizes.map((size, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Width</label>
                            <input
                              type="number"
                              value={size.width}
                              onChange={(e) => handleSizeChange(index, 'width', parseFloat(e.target.value))}
                              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-20 sm:text-sm border-gray-300 rounded-md text-black"
                              step="0.1"
                              min="0"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Height</label>
                            <input
                              type="number"
                              value={size.height}
                              onChange={(e) => handleSizeChange(index, 'height', parseFloat(e.target.value))}
                              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-20 sm:text-sm border-gray-300 rounded-md text-black"
                              step="0.1"
                              min="0"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Unit</label>
                            <select
                              value={size.unit}
                              onChange={(e) => handleSizeChange(index, 'unit', e.target.value)}
                              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-20 sm:text-sm border-gray-300 rounded-md text-black"
                            >
                              <option value="in">in</option>
                              <option value="cm">cm</option>
                            </select>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeSize(index)}
                            className="mt-6 text-red-600 hover:text-red-800"
                            disabled={product.sizes.length <= 1}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addSize}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-0.5 mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add Size
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={product.description}
                        onChange={handleChange}
                        required
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Write a detailed description of your product.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Link
                  href="/admin"
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? 'Saving...' : isNewProduct ? 'Create Product' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
