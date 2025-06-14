import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { existsSync } from 'fs';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Create uploads directory if it doesn't exist
async function ensureUploadDir() {
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  try {
    // Check if directory exists
    if (!existsSync(uploadDir)) {
      console.log(`Creating upload directory: ${uploadDir}`);
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.log(`Upload directory already exists: ${uploadDir}`);
    }
    return uploadDir;
  } catch (error) {
    console.error('Error creating upload directory:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  console.log('Upload request received');
  
  try {
    // Remove session check to allow public uploads
    // This is necessary for the custom order page where users might not be logged in

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.error('No file uploaded');
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    console.log(`File received: ${file.name}, type: ${file.type}, size: ${file.size} bytes`);

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      console.error(`Invalid file type: ${file.type}`);
      return NextResponse.json(
        { error: 'File type not supported. Please upload JPEG, PNG, or SVG.' },
        { status: 400 }
      );
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.error(`File too large: ${file.size} bytes`);
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const fileExtension = file.name.split('.').pop() || '';
    const uniqueFilename = `${uuidv4()}.${fileExtension}`;
    
    // Ensure upload directory exists
    const uploadDir = await ensureUploadDir();
    
    // File path where the image will be saved
    const filePath = join(uploadDir, uniqueFilename);
    console.log(`Saving file to: ${filePath}`);
    
    try {
      // Convert file to buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Write file to the server's filesystem
      await writeFile(filePath, buffer);
      console.log(`File successfully written to disk: ${filePath}`);
      
      // Public URL for the uploaded file
      const publicUrl = `/uploads/${uniqueFilename}`;
      console.log(`Public URL: ${publicUrl}`);

      // Return the URL to the uploaded file
      return NextResponse.json({
        url: publicUrl,
        public_id: uniqueFilename,
      });
    } catch (writeError) {
      console.error('Error writing file to disk:', writeError);
      return NextResponse.json(
        { 
          error: 'Failed to save uploaded file to disk',
          details: writeError instanceof Error ? writeError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json(
      { 
        error: 'Failed to upload file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 