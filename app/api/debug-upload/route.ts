import { NextResponse } from 'next/server';
import { existsSync, statSync, readdirSync, accessSync, constants } from 'fs';
import { join, resolve } from 'path';
import os from 'os';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cwd = process.cwd();
    const publicDir = join(cwd, 'public');
    const uploadsDir = join(publicDir, 'uploads');
    
    // Check if directories exist
    const publicExists = existsSync(publicDir);
    const uploadsExists = existsSync(uploadsDir);
    
    // Get directory stats if they exist
    const publicStats = publicExists ? statSync(publicDir) : null;
    const uploadsStats = uploadsExists ? statSync(uploadsDir) : null;
    
    // Check write permissions
    let publicWritable = false;
    let uploadsWritable = false;
    
    try {
      if (publicExists) {
        accessSync(publicDir, constants.W_OK);
        publicWritable = true;
      }
    } catch (e) {
      publicWritable = false;
    }
    
    try {
      if (uploadsExists) {
        accessSync(uploadsDir, constants.W_OK);
        uploadsWritable = true;
      }
    } catch (e) {
      uploadsWritable = false;
    }
    
    // List files in uploads directory if it exists
    const uploadFiles = uploadsExists ? readdirSync(uploadsDir).slice(0, 20) : [];
    
    // Get some system info
    const systemInfo = {
      platform: os.platform(),
      type: os.type(),
      release: os.release(),
      arch: os.arch(),
      tmpdir: os.tmpdir(),
      homedir: os.homedir(),
      hostname: os.hostname(),
      userInfo: os.userInfo({ encoding: 'utf8' }),
    };
    
    // Return all the debug info
    return NextResponse.json({
      cwd,
      publicDir: {
        path: publicDir,
        exists: publicExists,
        isDirectory: publicStats?.isDirectory() || false,
        permissions: publicStats?.mode.toString(8) || null,
        writable: publicWritable,
      },
      uploadsDir: {
        path: uploadsDir,
        absolutePath: resolve(uploadsDir),
        exists: uploadsExists,
        isDirectory: uploadsStats?.isDirectory() || false,
        permissions: uploadsStats?.mode.toString(8) || null,
        writable: uploadsWritable,
        files: uploadFiles,
      },
      env: {
        NODE_ENV: process.env.NODE_ENV,
      },
      systemInfo,
    });
  } catch (error) {
    console.error('Error in debug-upload API:', error);
    return NextResponse.json(
      { 
        error: 'Error debugging upload directory',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 