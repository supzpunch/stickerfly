// Simple MongoDB connection test using the built-in net module
const net = require('net');

// MongoDB connection details from environment or defaults
const host = process.env.MONGODB_HOST || 'mcw484g0swo40g8cwwgos4cw';
const port = parseInt(process.env.MONGODB_PORT || '27017', 10);

console.log(`Testing TCP connection to MongoDB at ${host}:${port}`);

// Create a socket connection to test if MongoDB is reachable
const socket = net.createConnection({ host, port }, () => {
  console.log('✅ Successfully connected to MongoDB server!');
  console.log('The MongoDB server is reachable at the specified host and port.');
  console.log('This confirms network connectivity to the database server.');
  
  // Close the connection
  socket.end();
});

// Handle connection errors
socket.on('error', (err) => {
  console.error('❌ Failed to connect to MongoDB server:');
  console.error(`Error: ${err.message}`);
  console.error('\nPossible causes:');
  console.error('1. The MongoDB service is not running');
  console.error('2. The hostname or port is incorrect');
  console.error('3. There is a network issue between the application and MongoDB');
  console.error('4. A firewall is blocking the connection');
  
  // Try DNS resolution
  const dns = require('dns');
  dns.lookup(host, (err, address, family) => {
    if (err) {
      console.error(`\nDNS lookup failed for ${host}: ${err.message}`);
      console.error('This indicates a hostname resolution issue.');
    } else {
      console.error(`\nDNS lookup successful for ${host}: Resolved to ${address} (IPv${family})`);
      console.error('The hostname is valid, but the connection is still failing.');
    }
    
    process.exit(1);
  });
});

// Handle connection close
socket.on('close', () => {
  console.log('Connection closed');
  process.exit(0);
});

// Set a timeout
socket.setTimeout(5000);
socket.on('timeout', () => {
  console.error('❌ Connection timed out after 5 seconds');
  socket.destroy();
  process.exit(1);
}); 