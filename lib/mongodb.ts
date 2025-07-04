import mongoose from 'mongoose';

// Define the cached mongoose connection type
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare global mongoose type
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

// For development without MongoDB
const isDev = process.env.NODE_ENV === 'development';
if (!MONGODB_URI && !isDev) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

// Initialize global mongoose cache if not exists
if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase() {
  // For development without MongoDB, return mock connection
  if (!MONGODB_URI && isDev) {
    console.log('Development mode: Using mock MongoDB connection');
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      // Set the database name explicitly if not in the connection string
      dbName: MONGODB_URI?.includes('/stickerfly') ? undefined : 'stickerfly',
    };

    console.log(`Connecting to MongoDB with URI: ${MONGODB_URI!.replace(/:[^:@]+@/, ':****@')}`);
    
    cached.promise = mongoose.connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        console.log('MongoDB connection successful');
        return mongoose;
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err);
        if (isDev) {
          console.log('Development mode: Continuing without MongoDB');
          return mongoose; // Return mongoose instance without connection in dev
        }
        throw err;
      });
  }
  
  try {
    const mongoose = await cached.promise;
    cached.conn = mongoose.connection;
    return cached.conn;
  } catch (e) {
    console.error('Failed to establish MongoDB connection:', e);
    if (isDev) {
      console.log('Development mode: Continuing without MongoDB');
      return null;
    }
    throw e;
  }
}

// Keep the default export for backward compatibility
export default connectToDatabase; 