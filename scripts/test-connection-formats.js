const mongoose = require('mongoose');

// Test different connection string formats
async function testConnectionFormats() {
  // Get the base connection info from environment variables
  const username = 'root';
  const password = process.env.MONGODB_PASSWORD || 'your_password_here';
  const host = 'mongodb-1';
  const port = '27017';
  const database = 'default';
  
  // Different connection string formats to try
  const connectionStrings = [
    // Format 1: Basic format
    `mongodb://${username}:${password}@${host}:${port}/${database}`,
    
    // Format 2: With authSource=admin
    `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
    
    // Format 3: With authSource=admin and other options
    `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin&retryWrites=true&w=majority`,
    
    // Format 4: Using IP instead of hostname (example IP - replace with actual)
    `mongodb://${username}:${password}@172.17.0.1:${port}/${database}?authSource=admin`,
  ];
  
  // Try each connection string
  for (let i = 0; i < connectionStrings.length; i++) {
    const uri = connectionStrings[i];
    console.log(`\n\nTesting connection format #${i + 1}:`);
    console.log(`URI: ${uri.replace(/:([^:@]+)@/, ':****@')}`);
    
    try {
      // Set mongoose options
      mongoose.set('debug', true);
      
      // Try to connect
      const connection = await mongoose.createConnection(uri, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      }).asPromise();
      
      console.log('✅ CONNECTION SUCCESSFUL!');
      console.log(`Database name: ${connection.db.databaseName}`);
      
      // List collections
      const collections = await connection.db.listCollections().toArray();
      console.log('Collections:', collections.map(c => c.name));
      
      // Close connection
      await connection.close();
      console.log('Connection closed');
      
      // This format worked, we can exit
      console.log('\n✅ Found working connection format! Use this in your MONGODB_URI environment variable.');
      process.exit(0);
    } catch (error) {
      console.error('❌ Connection failed:');
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      
      // Continue to the next format
      console.log('Trying next format...');
    }
  }
  
  console.error('\n❌ All connection formats failed. Please check your MongoDB service configuration.');
  process.exit(1);
}

// Run the test
testConnectionFormats(); 