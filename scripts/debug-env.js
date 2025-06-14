// Debug script to check environment variables and connection
console.log('=== Environment Debug ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 
    process.env.MONGODB_URI.replace(/:[^:@]+@/, ':****@') : 'NOT SET');
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? 'SET' : 'NOT SET');

// Test MongoDB connection
const mongoose = require('mongoose');

async function debugConnection() {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
        console.error('❌ MONGODB_URI environment variable is not set');
        return;
    }
    
    console.log('\n=== MongoDB Connection Test ===');
    console.log('Attempting connection...');
    
    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000
        });
        
        console.log('✅ MongoDB connection successful!');
        
        // Test database operations
        const db = mongoose.connection.db;
        const admin = db.admin();
        const result = await admin.ping();
        console.log('✅ Database ping successful:', result);
        
        const collections = await db.listCollections().toArray();
        console.log(`✅ Found ${collections.length} collections`);
        
        await mongoose.disconnect();
        console.log('✅ Disconnected successfully');
        
    } catch (error) {
        console.error('❌ MongoDB connection failed:');
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        
        if (error.name === 'MongoServerSelectionError') {
            console.error('This is likely a network connectivity issue');
        } else if (error.name === 'MongoServerError' && error.code === 18) {
            console.error('This is an authentication issue - wrong credentials');
        }
    }
}

debugConnection(); 