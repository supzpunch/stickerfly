// Simple direct MongoDB connection test using the MongoDB driver
const { MongoClient } = require('mongodb');

async function testDirectConnection() {
  console.log('Starting direct MongoDB connection test...');
  
  // Get the MongoDB URI from environment variable or use the correct internal URI for testing
  const uri = process.env.MONGODB_URI || 'mongodb://root:stickerfly123%21@mcw484g0swo40g8cwwgos4cw:27017/stickerfly?directConnection=true';
  
  // Hide password in logs
  console.log('Attempting to connect with URI:', uri.replace(/:([^:@]+)@/, ':****@'));
  
  // Create a new MongoClient
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000, // 5 seconds timeout
  });
  
  try {
    // Connect to the MongoDB server
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected successfully to MongoDB server');
    
    // Get the database name from the connection string or use default
    const dbName = uri.split('/').pop().split('?')[0] || 'stickerfly';
    const db = client.db(dbName);
    console.log(`Using database: ${dbName}`);
    
    // List all collections
    const collections = await db.listCollections().toArray();
    console.log('Collections in database:', collections.map(c => c.name));
    
    // Try to ping the database
    const pingResult = await db.command({ ping: 1 });
    console.log('Ping result:', pingResult);
    
    // Try to get server info
    const serverInfo = await db.command({ buildInfo: 1 });
    console.log('MongoDB version:', serverInfo.version);
    
    console.log('✅ MongoDB connection test completed successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    
    // If it's a connection error, provide more diagnostics
    if (err.name === 'MongoServerSelectionError') {
      console.error('This is likely a network or hostname resolution issue.');
      
      // Try to resolve the hostname using DNS
      const dns = require('dns');
      const hostname = uri.split('@')[1].split(':')[0];
      
      console.log(`Attempting to resolve hostname: ${hostname}`);
      dns.lookup(hostname, (err, address, family) => {
        if (err) {
          console.error(`DNS lookup failed: ${err.message}`);
        } else {
          console.log(`Hostname ${hostname} resolved to ${address} (IPv${family})`);
        }
      });
      
      // Try to ping the host
      const { exec } = require('child_process');
      exec(`ping -c 1 ${hostname}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Could not ping host: ${err.message}`);
          return;
        }
        console.log(`Ping result: ${stdout}`);
      });
    }
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the test
testDirectConnection().catch(console.error); 