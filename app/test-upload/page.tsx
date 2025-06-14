'use client';

import { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import Link from 'next/link';
import Image from 'next/image';

// Define types for our debug info
interface DebugInfo {
  status?: string;
  message?: string;
  fileCreated?: boolean;
  fileSize?: number;
  statusCode?: number;
  responseData?: any;
  headers?: Record<string, string>;
  error?: string;
  uploadsDir?: {
    exists?: boolean;
    status?: number;
    text?: string;
    error?: string;
  };
  debugApiResponse?: any;
  debugApiError?: string;
  [key: string]: any; // Allow for additional properties
}

export default function TestUpload() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');
  const [uploadCount, setUploadCount] = useState<number>(0);
  const [uploadHistory, setUploadHistory] = useState<string[]>([]);
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({});

  const handleImageUpload = (imageUrl: string) => {
    console.log('Image uploaded:', imageUrl);
    setUploadedImageUrl(imageUrl);
    
    if (imageUrl) {
      setUploadCount(prev => prev + 1);
      setUploadHistory(prev => [...prev, imageUrl]);
    }
  };

  // Function to test direct file upload via fetch API
  const testDirectUpload = async () => {
    try {
      setDebugInfo({ status: 'starting', message: 'Creating test file...' });
      
      // Create a simple test file (1x1 pixel transparent PNG)
      const base64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const file = new File([byteArray], 'test-pixel.png', { type: 'image/png' });
      
      setDebugInfo(prev => ({ ...prev, fileCreated: true, fileSize: file.size }));
      
      // Create FormData
      const formData = new FormData();
      formData.append('file', file);
      
      setDebugInfo(prev => ({ ...prev, status: 'uploading', message: 'Sending request...' }));
      
      // Upload the file
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      setDebugInfo(prev => ({ 
        ...prev, 
        status: response.ok ? 'success' : 'error',
        statusCode: response.status,
        responseData: data,
        headers: Object.fromEntries(response.headers.entries()),
      }));
      
      if (response.ok && data.url) {
        setUploadedImageUrl(data.url);
        setUploadCount(prev => prev + 1);
        setUploadHistory(prev => [...prev, data.url]);
      }
    } catch (error) {
      console.error('Direct upload test error:', error);
      setDebugInfo(prev => ({ 
        ...prev, 
        status: 'error',
        error: error instanceof Error ? error.message : String(error)
      }));
    }
  };

  // Function to check if uploads directory exists
  const checkUploadsDir = async () => {
    try {
      const response = await fetch('/uploads/test-permissions.txt');
      const exists = response.ok;
      const status = response.status;
      const text = exists ? await response.text() : '';
      
      setDebugInfo(prev => ({ 
        ...prev, 
        uploadsDir: {
          exists,
          status,
          text: text.substring(0, 100) // Limit text length
        }
      }));
    } catch (error) {
      setDebugInfo(prev => ({ 
        ...prev, 
        uploadsDir: {
          error: error instanceof Error ? error.message : String(error)
        }
      }));
    }
  };

  // Function to get detailed debug info from API
  const getDebugInfo = async () => {
    try {
      setDebugInfo(prev => ({ ...prev, status: 'loading', message: 'Fetching debug info...' }));
      
      const response = await fetch('/api/debug-upload');
      const data = await response.json();
      
      setDebugInfo(prev => ({ 
        ...prev, 
        status: response.ok ? 'success' : 'error',
        debugApiResponse: data
      }));
    } catch (error) {
      console.error('Error fetching debug info:', error);
      setDebugInfo(prev => ({ 
        ...prev, 
        status: 'error',
        debugApiError: error instanceof Error ? error.message : String(error)
      }));
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Image Upload Test Page</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upload Test</h2>
          <ImageUploader onImageUpload={handleImageUpload} />
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">Upload Stats:</h3>
            <p>Total uploads: {uploadCount}</p>
            {uploadedImageUrl && (
              <p className="mt-2">
                Latest upload: <code className="bg-gray-100 p-1 rounded">{uploadedImageUrl}</code>
              </p>
            )}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Debug Tools</h2>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={testDirectUpload}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Test Direct Upload
              </button>
              
              <button 
                onClick={checkUploadsDir}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Check Uploads Directory
              </button>
              
              <button 
                onClick={getDebugInfo}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
              >
                Get Debug Info
              </button>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium mb-2">Debug Info:</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-60">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      {uploadHistory.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upload History</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {uploadHistory.map((url, index) => (
              <div key={index} className="relative aspect-square border rounded overflow-hidden">
                <Image 
                  src={url} 
                  alt={`Uploaded image ${index + 1}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 