'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUploader from '../components/ImageUploader';

interface SizeOption {
  width: number;
  height: number;
  unit: 'in' | 'cm';
  price: number;
}

export default function CustomOrder() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState('');
  const [quantity, setQuantity] = useState(10);
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Predefined size options
  const sizeOptions: SizeOption[] = [
    { width: 2, height: 2, unit: 'in', price: 3.99 },
    { width: 3, height: 3, unit: 'in', price: 4.99 },
    { width: 4, height: 4, unit: 'in', price: 5.99 },
    { width: 5, height: 5, unit: 'in', price: 6.99 },
    { width: 6, height: 6, unit: 'in', price: 7.99 },
  ];

  // Calculate total price
  const calculateTotal = () => {
    if (!selectedSize) return 0;
    
    // Base price for the selected size
    let total = selectedSize.price;
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session) {
      router.push('/login?redirect=custom-order');
      return;
    }
    
    if (!imageUrl) {
      setError('Please upload an image for your sticker');
      return;
    }
    
    if (!selectedSize) {
      setError('Please select a size for your sticker');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Create custom product
      const productResponse = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Custom Sticker',
          description: 'Custom designed sticker',
          price: selectedSize.price,
          sizes: [
            {
              width: selectedSize.width,
              height: selectedSize.height,
              unit: selectedSize.unit,
            }
          ],
          minQuantity: 10,
          imageUrl: imageUrl,
          category: 'custom',
          isCustom: true,
        }),
      });
      
      if (!productResponse.ok) {
        const data = await productResponse.json();
        throw new Error(data.error || 'Failed to create custom product');
      }
      
      const productData = await productResponse.json();
      
      // Add to cart or redirect to checkout
      router.push(`/checkout?product=${productData.product._id}&quantity=${quantity}&size=${selectedSize.width}x${selectedSize.height}${selectedSize.unit}`);
    } catch (error) {
      console.error('Error creating custom order:', error);
      setError(error instanceof Error ? error.message : 'Failed to create custom order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Create Your Custom Sticker
          </h1>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <ImageUploader 
                    onUploadComplete={(url) => setImageUrl(url)}
                    label="Upload Your Sticker Design"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Upload a high-resolution image of your design. For best results, use a PNG file with a transparent background.
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Size
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {sizeOptions.map((size, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`relative border rounded-md p-4 flex flex-col items-center ${
                          selectedSize === size
                            ? 'border-primary-500 ring-2 ring-primary-500'
                            : 'border-gray-300'
                        }`}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          {size.width}" × {size.height}"
                        </span>
                        <span className="mt-1 text-xs text-gray-500">
                          ${size.price.toFixed(2)} each
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  >
                    <option value="10">10 stickers</option>
                    <option value="25">25 stickers (10% off)</option>
                    <option value="50">50 stickers (20% off)</option>
                    <option value="100">100 stickers (30% off)</option>
                    <option value="250">250 stickers (30% off)</option>
                    <option value="500">500 stickers (30% off)</option>
                  </select>
                </div>
                
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="bg-gray-50 px-4 py-5 sm:p-6 rounded-md">
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
                
                <div className="flex justify-end">
                  <Link
                    href="/"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 mr-3"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={loading || !imageUrl || !selectedSize}
                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                      loading || !imageUrl || !selectedSize
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                  >
                    {loading ? 'Processing...' : 'Continue to Checkout'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 