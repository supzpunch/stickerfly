const mongoose = require('mongoose');

async function testConnection() {
  // Get the MongoDB URI from environment variable
  const uri = process.env.MONGODB_URI;
  
  console.log('Attempting to connect to MongoDB with URI:', 
    uri ? uri.replace(/:([^:@]+)@/, ':****@') : 'undefined'); // Hide password in logs
  
  try {
    // Set mongoose options for better debugging
    mongoose.set('debug', true);
    
    // Try to connect
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30
    });
    
    console.log('Successfully connected to MongoDB!');
    console.log('MongoDB version:', mongoose.connection.db.serverConfig.s.options.serverApi);
    console.log('Database name:', mongoose.connection.db.databaseName);
    
    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    // Close connection
    await mongoose.disconnect();
    console.log('Connection closed');
  } catch (error) {
    console.error('Failed to connect to MongoDB:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    // Check if it's a connection error
    if (error.name === 'MongoServerSelectionError') {
      console.error('This is likely a network or hostname resolution issue.');
      console.error('Please check:');
      console.error('1. MongoDB service is running');
      console.error('2. Hostname in connection string is correct');
      console.error('3. Network allows connection between services');
      
      // Try to resolve the hostname
      const dns = require('dns');
      const url = new URL(uri);
      const hostname = url.hostname;
      
      console.error(`Attempting to resolve hostname: ${hostname}`);
      dns.lookup(hostname, (err, address, family) => {
        if (err) {
          console.error(`DNS lookup failed: ${err.message}`);
        } else {
          console.error(`Hostname ${hostname} resolved to ${address} (IPv${family})`);
        }
      });
    }
  } finally {
    process.exit(0);
  }
}

testConnection(); 