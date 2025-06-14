import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync, statSync } from 'fs';

export async function GET() {
  try {
    // Get the upload directory path
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    
    // Check if directory exists
    let dirExists = false;
    let dirWritable = false;
    let dirInfo = null;
    
    try {
      if (existsSync(uploadDir)) {
        dirExists = true;
        dirInfo = statSync(uploadDir);
        
        // Try to create a test file to check if the directory is writable
        const testFilePath = join(uploadDir, 'test-write.txt');
        await writeFile(testFilePath, 'Test write permission');
        dirWritable = true;
      }
    } catch (error) {
      console.error('Error checking directory:', error);
    }
    
    // Try to create the directory if it doesn't exist
    if (!dirExists) {
      try {
        await mkdir(uploadDir, { recursive: true });
        dirExists = true;
        
        // Check if the newly created directory is writable
        const testFilePath = join(uploadDir, 'test-write.txt');
        await writeFile(testFilePath, 'Test write permission');
        dirWritable = true;
      } catch (error) {
        console.error('Error creating directory:', error);
      }
    }
    
    return NextResponse.json({
      success: true,
      dirExists,
      dirWritable,
      dirInfo: dirInfo ? {
        isDirectory: dirInfo.isDirectory(),
        mode: dirInfo.mode,
        size: dirInfo.size,
        uid: dirInfo.uid,
        gid: dirInfo.gid,
      } : null,
      uploadDir,
      cwd: process.cwd(),
    });
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : null,
    }, { status: 500 });
  }
} 