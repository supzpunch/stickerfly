const mongoose = require('mongoose');

async function testNewMongoDB() {
    // Your new MongoDB connection details
    const hostname = 'YOUR_NEW_MONGODB_HOSTNAME'; // Replace with actual hostname
    const username = 'admin';
    const password = 'admin123';
    const database = 'stickerfly';
    
    const MONGODB_URI = `mongodb://${username}:${password}@${hostname}:27017/${database}?directConnection=true&authSource=admin`;
    
    console.log('Testing new MongoDB connection...');
    console.log(`URI: ${MONGODB_URI.replace(password, '****')}`);
    
    try {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000
        };
        
        await mongoose.connect(MONGODB_URI, opts);
        console.log('✅ MongoDB connection successful!');
        
        // Test basic operations
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log(`✅ Database accessible, found ${collections.length} collections`);
        
        // Test creating a document
        const testCollection = db.collection('connection_test');
        const result = await testCollection.insertOne({ 
            test: true, 
            timestamp: new Date(),
            message: 'New MongoDB service test'
        });
        console.log('✅ Write operation successful, inserted ID:', result.insertedId);
        
        // Clean up
        await testCollection.deleteOne({ _id: result.insertedId });
        console.log('✅ Delete operation successful');
        
        await mongoose.disconnect();
        console.log('✅ Disconnected successfully');
        
        console.log('\n🎉 SUCCESS! Your new MongoDB service is working perfectly!');
        console.log('You can now use this connection string in your app:');
        console.log(MONGODB_URI);
        
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        console.error('Full error:', error);
    }
}

testNewMongoDB(); 