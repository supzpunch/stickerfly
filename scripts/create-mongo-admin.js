const { MongoClient } = require('mongodb');

async function createAdminUser() {
    // Connect using the root user first
    const rootUri = 'mongodb://root:stickerfly123@mcw484g0swo40g8cwwgos4cw:27017/admin?directConnection=true';
    
    console.log('Connecting to MongoDB as root user...');
    
    try {
        const client = new MongoClient(rootUri, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000
        });
        
        await client.connect();
        console.log('✅ Connected to MongoDB');
        
        const adminDb = client.db('admin');
        
        // Create admin user
        const result = await adminDb.command({
            createUser: "admin",
            pwd: "adminpassword",
            roles: ["root"]
        });
        
        console.log('✅ Admin user created successfully:', result);
        
        await client.close();
        console.log('✅ Connection closed');
        
    } catch (error) {
        if (error.message.includes('User "admin@admin" already exists')) {
            console.log('ℹ️  Admin user already exists');
        } else {
            console.error('❌ Error creating admin user:', error.message);
        }
    }
}

createAdminUser(); 