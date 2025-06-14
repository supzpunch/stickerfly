const mongoose = require('mongoose');

// Test the exact same connection logic as the app
async function testDatabaseConnection() {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    console.log('Testing database connection...');
    console.log(`MONGODB_URI: ${MONGODB_URI ? MONGODB_URI.replace(/:[^:@]+@/, ':****@') : 'NOT SET'}`);
    
    if (!MONGODB_URI) {
        console.error('❌ MONGODB_URI environment variable is not set');
        return;
    }
    
    try {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            dbName: MONGODB_URI.includes('/stickerfly') ? undefined : 'stickerfly',
        };
        
        console.log('Attempting to connect with options:', opts);
        
        await mongoose.connect(MONGODB_URI, opts);
        console.log('✅ MongoDB connection successful');
        
        // Test basic operations
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log(`✅ Database accessible, found ${collections.length} collections`);
        
        // Test if we can create a simple document
        const testCollection = db.collection('connection_test');
        const result = await testCollection.insertOne({ 
            test: true, 
            timestamp: new Date(),
            message: 'Connection test from script'
        });
        console.log('✅ Write operation successful, inserted ID:', result.insertedId);
        
        // Clean up
        await testCollection.deleteOne({ _id: result.insertedId });
        console.log('✅ Delete operation successful');
        
        await mongoose.disconnect();
        console.log('✅ Disconnected successfully');
        
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        console.error('Error details:', error);
    }
}

testDatabaseConnection(); 