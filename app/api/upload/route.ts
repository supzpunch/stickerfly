import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { existsSync, createWriteStream, copyFileSync } from 'fs';
import { Readable } from 'stream';
import path from 'path';
import os from 'os';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Create uploads directory if it doesn't exist
async function ensureUploadDir() {
  // Use absolute path to make sure we're writing to the correct location
  const uploadDir = path.resolve(process.cwd(), 'public', 'uploads');
  console.log(`Upload directory absolute path: ${uploadDir}`);
  
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

// Helper function to convert Buffer to Stream
function bufferToStream(buffer: Buffer) {
  const readable = new Readable();
  readable._read = () => {}; // _read is required but you can noop it
  readable.push(buffer);
  readable.push(null);
  return readable;
}

// Helper function to write file using streams
function writeFileWithStream(filePath: string, buffer: Buffer): Promise<void> {
  return new Promise((resolve, reject) => {
    const stream = createWriteStream(filePath);
    const readable = bufferToStream(buffer);
    
    stream.on('error', (error) => {
      console.error(`Stream error writing to ${filePath}:`, error);
      reject(error);
    });
    
    stream.on('finish', () => {
      console.log(`File successfully written to ${filePath} using stream`);
      resolve();
    });
    
    readable.pipe(stream);
  });
}

// Helper function to save file to temp directory first, then move to final location
async function saveFileThroughTemp(buffer: Buffer, finalPath: string): Promise<void> {
  try {
    // Create a temporary file path in the OS temp directory
    const tempDir = os.tmpdir();
    const tempFilename = `upload-${uuidv4()}`;
    const tempPath = path.join(tempDir, tempFilename);
    
    console.log(`Saving to temporary location: ${tempPath}`);
    
    // Write to temp location first
    await writeFile(tempPath, buffer);
    
    // Verify temp file was created
    if (!existsSync(tempPath)) {
      throw new Error(`Failed to create temporary file at ${tempPath}`);
    }
    
    console.log(`Temporary file created successfully: ${tempPath}`);
    
    // Copy from temp to final destination
    console.log(`Copying from ${tempPath} to ${finalPath}`);
    copyFileSync(tempPath, finalPath);
    
    // Verify final file exists
    if (!existsSync(finalPath)) {
      throw new Error(`Failed to copy file to final destination: ${finalPath}`);
    }
    
    console.log(`File successfully saved to final destination: ${finalPath}`);
  } catch (error) {
    console.error('Error in saveFileThroughTemp:', error);
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
    const filePath = path.resolve(uploadDir, uniqueFilename);
    console.log(`Saving file to: ${filePath}`);
    
    try {
      // Convert file to buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Try different methods to save the file
      try {
        // Try saving through temp file first (most reliable)
        await saveFileThroughTemp(buffer, filePath);
      } catch (tempError) {
        console.error('Error with temp file method, trying direct write:', tempError);
        
        try {
          // Try direct write with fs.writeFile
          console.log('Attempting to write file using fs.writeFile...');
          await writeFile(filePath, buffer);
          console.log('File successfully written using fs.writeFile');
        } catch (writeError) {
          console.error('Error with fs.writeFile, trying stream method:', writeError);
          await writeFileWithStream(filePath, buffer);
        }
      }
      
      // Verify the file was created
      if (!existsSync(filePath)) {
        throw new Error(`File was not created at ${filePath}`);
      }
      
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
          details: writeError instanceof Error ? writeError.message : 'Unknown error',
          path: filePath
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