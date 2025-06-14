'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { FiUpload, FiX, FiAlertCircle } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  className?: string;
  label?: string;
}

export default function ImageUploader({ onImageUpload, className = '', label = 'Upload Image' }: ImageUploaderProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Reset states
    setError(null);
    setUploading(true);
    setUploadProgress(10); // Start progress

    try {
      const file = acceptedFiles[0];
      
      if (!file) {
        setError('No file selected');
        setUploading(false);
        return;
      }

      console.log(`Uploading file: ${file.name}, type: ${file.type}, size: ${file.size} bytes`);
      
      // Create form data for the file
      const formData = new FormData();
      formData.append('file', file);
      
      setUploadProgress(30); // Update progress
      
      // Upload the file to the server
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      setUploadProgress(70); // Update progress
      
      // Parse the response
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Upload error:', data);
        throw new Error(data.error || data.details || 'Failed to upload image');
      }
      
      setUploadProgress(90); // Almost done

      console.log('Upload successful:', data);
      
      // Set the uploaded image URL
      if (data.url) {
        setUploadedImage(data.url);
        onImageUpload(data.url);
      } else {
        throw new Error('No URL returned from server');
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
      setUploadProgress(100); // Complete progress
      setTimeout(() => setUploadProgress(0), 1000); // Reset progress after a delay
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/svg+xml': [],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
  });

  const removeImage = () => {
    setUploadedImage(null);
    setError(null);
    onImageUpload(''); // Clear the image URL
  };

  const retryUpload = () => {
    setError(null);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      {!uploadedImage && !uploading ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : error 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-2">
            {error ? (
              <>
                <FiAlertCircle className="w-10 h-10 text-red-500" />
                <p className="text-red-500 font-medium">{error}</p>
                <button 
                  onClick={retryUpload}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Try Again
                </button>
              </>
            ) : (
              <>
                <FiUpload className="w-10 h-10 text-gray-400" />
                <p className="text-gray-500">
                  {isDragActive
                    ? 'Drop the image here...'
                    : 'Drag & drop an image here, or click to select one'}
                </p>
                <p className="text-xs text-gray-400">
                  Supports: JPEG, PNG, SVG (Max: 5MB)
                </p>
              </>
            )}
          </div>
        </div>
      ) : uploading ? (
        <div className="border-2 rounded-lg p-6 text-center border-blue-300 bg-blue-50">
          <div className="flex flex-col items-center justify-center space-y-3">
            <AiOutlineLoading3Quarters className="w-10 h-10 text-blue-500 animate-spin" />
            <p className="text-blue-500 font-medium">Uploading image...</p>
            
            {/* Progress bar */}
            <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : uploadedImage && (
        <div className="relative border rounded-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src={uploadedImage}
              alt="Uploaded image"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
            aria-label="Remove image"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
} 