// MongoDB authentication test script
const { MongoClient } = require('mongodb');

// Configuration
const host = 'mcw484g0swo40g8cwwgos4cw';
const port = 27017;
const username = 'root';
// Try different password formats
const passwords = [
  'stickerfly123!',                // Raw password with special character
  'stickerfly123%21',              // URL-encoded exclamation mark
  encodeURIComponent('stickerfly123!') // Properly URL-encoded
];
const databases = ['stickerfly', 'default', 'admin'];
const authSources = ['admin', undefined];

async function testConnection(uri) {
  console.log(`Testing: ${uri.replace(/:[^:@]+@/, ':****@')}`);
  
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
  });
  
  try {
    await client.connect();
    console.log('✅ CONNECTION SUCCESSFUL!');
    const db = client.db();
    const adminDb = client.db('admin');
    
    // Try to run a simple command to verify authentication
    const result = await adminDb.command({ ping: 1 });
    console.log('Ping result:', result);
    
    return true;
  } catch (err) {
    console.log(`❌ Failed: ${err.name} - ${err.message}`);
    return false;
  } finally {
    await client.close();
  }
}

async function runTests() {
  console.log('Starting MongoDB authentication tests...');
  
  // Try all combinations
  for (const password of passwords) {
    for (const database of databases) {
      for (const authSource of authSources) {
        let uri = `mongodb://${username}:${password}@${host}:${port}/${database}?directConnection=true`;
        if (authSource) {
          uri += `&authSource=${authSource}`;
        }
        
        const success = await testConnection(uri);
        if (success) {
          console.log('\n✅✅✅ FOUND WORKING CONNECTION STRING:');
          console.log(`mongodb://${username}:****@${host}:${port}/${database}?directConnection=true${authSource ? `&authSource=${authSource}` : ''}`);
          console.log('\nUse this connection string in your MONGODB_URI environment variable.');
          return;
        }
        
        // Add a small delay between tests
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  console.log('\n❌ All connection attempts failed.');
  console.log('Please verify your MongoDB credentials in Coolify.');
  
  // Try without authentication as a last resort
  console.log('\nTrying connection without authentication...');
  const noAuthUri = `mongodb://${host}:${port}?directConnection=true`;
  const success = await testConnection(noAuthUri);
  if (success) {
    console.log('\n✅ Connection without authentication succeeded!');
    console.log('Your MongoDB might not have authentication enabled.');
    console.log(`Use this connection string: ${noAuthUri}`);
  }
}

// Run the tests
runTests().catch(console.error); 