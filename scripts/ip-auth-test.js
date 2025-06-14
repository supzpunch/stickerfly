const { MongoClient } = require('mongodb');

async function testAuthWithIP() {
    const ip = '10.0.1.7';
    const port = '27017';
    const username = 'root';
    const password = 'stickerfly123!';
    
    const testConfigs = [
        {
            name: 'IP with stickerfly database',
            uri: `mongodb://${username}:${encodeURIComponent(password)}@${ip}:${port}/stickerfly?directConnection=true&authSource=admin`
        },
        {
            name: 'IP with default database',
            uri: `mongodb://${username}:${encodeURIComponent(password)}@${ip}:${port}/default?directConnection=true&authSource=admin`
        },
        {
            name: 'IP with admin database',
            uri: `mongodb://${username}:${encodeURIComponent(password)}@${ip}:${port}/admin?directConnection=true&authSource=admin`
        },
        {
            name: 'IP without authSource',
            uri: `mongodb://${username}:${encodeURIComponent(password)}@${ip}:${port}/stickerfly?directConnection=true`
        }
    ];

    console.log('Testing MongoDB authentication with IP address...');
    
    for (const config of testConfigs) {
        console.log(`\nTesting: ${config.name}`);
        console.log(`URI: ${config.uri.replace(password, '****')}`);
        
        try {
            const client = new MongoClient(config.uri, {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000
            });
            
            await client.connect();
            console.log('✅ Connection successful!');
            
            // Test database operations
            const db = client.db('stickerfly');
            const collections = await db.listCollections().toArray();
            console.log(`✅ Database accessible, found ${collections.length} collections`);
            
            await client.close();
            console.log('✅ Connection closed successfully');
            
            // If we get here, this config works!
            console.log('\n🎉 SUCCESS! This configuration works.');
            console.log('Use this URI in your environment variables:');
            console.log(config.uri);
            return;
            
        } catch (error) {
            console.log(`❌ Failed: ${error.name} - ${error.message}`);
        }
    }
    
    console.log('\n❌ All authentication attempts failed.');
}

testAuthWithIP().catch(console.error); 