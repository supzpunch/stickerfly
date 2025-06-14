'use client';

import { useState } from 'react';
import Link from 'next/link';
import ImageUploader from '../components/ImageUploader';
import Image from 'next/image';

export default function TestUploadPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleUploadComplete = (imageUrl: string) => {
    setUploadedImage(imageUrl);
  };
  
  const checkUploadDir = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/debug-upload');
      const data = await response.json();
      setDebugInfo(data);
    } catch (error) {
      console.error('Error checking upload directory:', error);
      setDebugInfo({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Image Upload Test</h1>
            <p className="mt-2 text-gray-600">
              This page tests the image upload functionality.
            </p>
          </div>
          
          <div className="mb-8">
            <ImageUploader 
              onUploadComplete={handleUploadComplete}
              label="Test Image Upload"
            />
          </div>
          
          {uploadedImage && (
            <div className="mb-8 p-4 bg-green-50 rounded-lg">
              <h2 className="text-lg font-medium text-green-800 mb-2">Upload Successful!</h2>
              <p className="text-sm text-green-700 mb-4">
                Image URL: <code className="bg-green-100 px-1 py-0.5 rounded">{uploadedImage}</code>
              </p>
              <div className="relative h-64 w-full border border-green-200 rounded-md overflow-hidden">
                <Image
                  src={uploadedImage}
                  alt="Uploaded image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
          
          <div className="border-t border-gray-200 pt-4 mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Debug Tools</h2>
            <button
              onClick={checkUploadDir}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isLoading ? 'Checking...' : 'Check Upload Directory'}
            </button>
            
            {debugInfo && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-md font-medium text-gray-700 mb-2">Debug Information</h3>
                <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-96">
                  {JSON.stringify(debugInfo, null, 2)}
                </pre>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 