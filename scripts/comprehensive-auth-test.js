const { MongoClient } = require('mongodb');

async function testComprehensiveAuth() {
    const hostname = 'mcw484g0swo40g8cwwgos4cw';
    const port = '27017';
    const username = 'root';
    const rawPassword = 'stickerfly123';
    
    // Different password encoding approaches
    const passwordVariants = [
        { name: 'URL encoded', password: encodeURIComponent(rawPassword) },
        { name: 'Raw password', password: rawPassword },
        { name: 'Double encoded', password: encodeURIComponent(encodeURIComponent(rawPassword)) }
    ];
    
    // Different authentication configurations
    const authConfigs = [
        { name: 'admin authSource', authSource: 'admin' },
        { name: 'no authSource', authSource: null },
        { name: 'stickerfly authSource', authSource: 'stickerfly' },
        { name: 'default authSource', authSource: 'default' }
    ];
    
    // Different databases to connect to
    const databases = ['admin', 'stickerfly', 'default'];
    
    console.log('Starting comprehensive MongoDB authentication tests...\n');
    
    for (const pwdVariant of passwordVariants) {
        console.log(`\n=== Testing with ${pwdVariant.name}: "${pwdVariant.password}" ===`);
        
        for (const authConfig of authConfigs) {
            for (const database of databases) {
                let uri = `mongodb://${username}:${pwdVariant.password}@${hostname}:${port}/${database}?directConnection=true`;
                
                if (authConfig.authSource) {
                    uri += `&authSource=${authConfig.authSource}`;
                }
                
                const testName = `DB: ${database}, ${authConfig.name}`;
                console.log(`\nTesting: ${testName}`);
                console.log(`URI: ${uri.replace(pwdVariant.password, '****')}`);
                
                try {
                    const client = new MongoClient(uri, {
                        serverSelectionTimeoutMS: 5000,
                        connectTimeoutMS: 5000
                    });
                    
                    await client.connect();
                    console.log('✅ Connection successful!');
                    
                    // Test admin command
                    try {
                        const adminDb = client.db('admin');
                        const result = await adminDb.command({ ping: 1 });
                        console.log('✅ Admin ping successful');
                    } catch (adminError) {
                        console.log(`⚠️  Admin ping failed: ${adminError.message}`);
                    }
                    
                    // Test database operations
                    try {
                        const db = client.db('stickerfly');
                        const collections = await db.listCollections().toArray();
                        console.log(`✅ Database accessible, found ${collections.length} collections`);
                        
                        // Try to create a test collection
                        const testCollection = db.collection('connection_test');
                        await testCollection.insertOne({ test: true, timestamp: new Date() });
                        console.log('✅ Write operation successful');
                        
                        // Clean up test document
                        await testCollection.deleteOne({ test: true });
                        console.log('✅ Delete operation successful');
                        
                    } catch (dbError) {
                        console.log(`⚠️  Database operations failed: ${dbError.message}`);
                    }
                    
                    await client.close();
                    console.log('✅ Connection closed successfully');
                    
                    // If we get here, this config works!
                    console.log('\n🎉 SUCCESS! This configuration works.');
                    console.log('='.repeat(60));
                    console.log('WORKING CONFIGURATION:');
                    console.log(`Password encoding: ${pwdVariant.name}`);
                    console.log(`Database: ${database}`);
                    console.log(`Auth config: ${authConfig.name}`);
                    console.log(`URI: ${uri}`);
                    console.log('='.repeat(60));
                    return;
                    
                } catch (error) {
                    console.log(`❌ Failed: ${error.name} - ${error.message}`);
                }
            }
        }
    }
    
    console.log('\n❌ All authentication attempts failed.');
    console.log('\nTroubleshooting suggestions:');
    console.log('1. Verify MongoDB service is running');
    console.log('2. Check if user "root" exists in MongoDB');
    console.log('3. Verify the password is correct');
    console.log('4. Check MongoDB logs for authentication errors');
}

testComprehensiveAuth().catch(console.error); 