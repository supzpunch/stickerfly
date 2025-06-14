const mongoose = require('mongoose');

// Test different connection string formats
async function testConnectionFormats() {
  // Get the base connection info from environment variables
  const username = 'root';
  const password = process.env.MONGODB_PASSWORD || 'stickerfly123%21'; // URL encoded ! character
  const host = 'mcw484g0swo40g8cwwgos4cw';
  const port = '27017';
  const database = 'stickerfly';
  
  // Different connection string formats to try
  const connectionStrings = [
    // Format 1: Coolify internal format with directConnection
    `mongodb://${username}:${password}@${host}:${port}/${database}?directConnection=true`,
    
    // Format 2: With authSource=admin
    `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
    
    // Format 3: With both directConnection and authSource
    `mongodb://${username}:${password}@${host}:${port}/${database}?directConnection=true&authSource=admin`,
    
    // Format 4: Without database name
    `mongodb://${username}:${password}@${host}:${port}/?directConnection=true`,
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