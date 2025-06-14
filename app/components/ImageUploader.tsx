'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  onUploadComplete: (imageUrl: string) => void;
  className?: string;
  label?: string;
}

export default function ImageUploader({ 
  onUploadComplete, 
  className = '', 
  label = 'Upload Image' 
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      setError(`Please upload a valid image file (JPEG, PNG, or SVG). Received: ${file.type}`);
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError(`File size too large. Maximum size is 5MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload the file
    try {
      setIsUploading(true);
      setError(null);

      console.log(`Uploading file: ${file.name}, type: ${file.type}, size: ${file.size} bytes`);
      
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('Upload response error:', data);
        throw new Error(data.error || data.details || 'Failed to upload image');
      }

      console.log('Upload successful:', data);
      onUploadComplete(data.url);
    } catch (error) {
      console.error('Upload error:', error);
      setError(error instanceof Error ? error.message : 'Failed to upload image');
      
      // If we have a preview but the upload failed, clear the preview
      if (preview) {
        setPreview(null);
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      
      // Create a synthetic change event for the file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) {
        // Create a new FileList containing the dropped file
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;
        
        // Trigger the file change handler
        const changeEvent = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(changeEvent);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className={`${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="mt-1 flex flex-col items-center">
        {preview ? (
          <div className="relative h-64 w-full mb-4">
            <Image 
              src={preview} 
              alt="Preview" 
              fill
              className="object-contain rounded-md"
            />
          </div>
        ) : (
          <div 
            className="flex justify-center items-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary-500 focus:outline-none"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <span className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <span className="font-medium text-gray-600">
                {isUploading ? 'Uploading...' : 'Drop files to upload or click to browse'}
              </span>
            </span>
          </div>
        )}
        
        <input 
          type="file" 
          className="hidden" 
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/svg+xml"
          disabled={isUploading}
          id="file-upload"
        />
        
        <label
          htmlFor="file-upload"
          className={`mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
            isUploading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary-600 hover:bg-primary-700 cursor-pointer'
          }`}
        >
          {isUploading ? 'Uploading...' : preview ? 'Change Image' : 'Select Image'}
        </label>

        {error && (
          <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">
              {error}
            </p>
            <p className="text-xs text-red-500 mt-1">
              Please try again or contact support if the problem persists.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 