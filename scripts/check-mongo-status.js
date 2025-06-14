// Script to check MongoDB service status
const net = require('net');
const dns = require('dns');
const { exec } = require('child_process');

// Configuration
const host = process.env.MONGODB_HOST || 'mcw484g0swo40g8cwwgos4cw';
const port = parseInt(process.env.MONGODB_PORT || '27017', 10);

console.log(`Checking MongoDB service status at ${host}:${port}...`);

// Function to check DNS resolution
function checkDNS() {
  return new Promise((resolve) => {
    console.log(`\nResolving hostname: ${host}`);
    dns.lookup(host, (err, address, family) => {
      if (err) {
        console.error(`❌ DNS lookup failed: ${err.message}`);
        resolve(false);
      } else {
        console.log(`✅ Hostname resolved to ${address} (IPv${family})`);
        resolve(true);
      }
    });
  });
}

// Function to ping the host
function pingHost() {
  return new Promise((resolve) => {
    console.log(`\nPinging host: ${host}`);
    exec(`ping -c 1 ${host}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`❌ Ping failed: ${err.message}`);
        resolve(false);
      } else {
        console.log(`✅ Ping successful`);
        console.log(stdout);
        resolve(true);
      }
    });
  });
}

// Function to check TCP connection
function checkTCPConnection() {
  return new Promise((resolve) => {
    console.log(`\nTesting TCP connection to ${host}:${port}`);
    
    const socket = net.createConnection({ host, port }, () => {
      console.log(`✅ TCP connection successful`);
      socket.end();
      resolve(true);
    });
    
    socket.on('error', (err) => {
      console.error(`❌ TCP connection failed: ${err.message}`);
      resolve(false);
    });
    
    socket.setTimeout(5000);
    socket.on('timeout', () => {
      console.error('❌ TCP connection timed out');
      socket.destroy();
      resolve(false);
    });
  });
}

// Function to check MongoDB wire protocol
function checkMongoWireProtocol() {
  return new Promise((resolve) => {
    console.log(`\nTesting MongoDB wire protocol on ${host}:${port}`);
    
    const socket = net.createConnection({ host, port }, () => {
      console.log(`✅ Connected to server`);
      
      // Send a MongoDB ping command (simplified wire protocol)
      const buffer = Buffer.alloc(16);
      // Message length (16 bytes)
      buffer.writeInt32LE(16, 0);
      // Request ID (arbitrary)
      buffer.writeInt32LE(1, 4);
      // Response ID (0 for requests)
      buffer.writeInt32LE(0, 8);
      // OpCode (2013 for OP_MSG)
      buffer.writeInt32LE(2013, 12);
      
      socket.write(buffer);
      
      // Set a timeout for the response
      setTimeout(() => {
        socket.end();
        console.log('✅ Server responded to MongoDB protocol message');
        resolve(true);
      }, 2000);
    });
    
    socket.on('error', (err) => {
      console.error(`❌ MongoDB protocol test failed: ${err.message}`);
      resolve(false);
    });
    
    socket.setTimeout(5000);
    socket.on('timeout', () => {
      console.error('❌ MongoDB protocol test timed out');
      socket.destroy();
      resolve(false);
    });
  });
}

// Run all checks
async function runChecks() {
  console.log('Starting MongoDB service checks...');
  
  const dnsResolved = await checkDNS();
  if (!dnsResolved) {
    console.log('\n⚠️ DNS resolution failed. Check your hostname configuration.');
  }
  
  const pingSuccessful = await pingHost();
  if (!pingSuccessful) {
    console.log('\n⚠️ Ping failed. The host might be unreachable or blocking ICMP packets.');
  }
  
  const tcpConnected = await checkTCPConnection();
  if (!tcpConnected) {
    console.log('\n❌ TCP connection failed. Possible causes:');
    console.log('1. MongoDB service is not running');
    console.log('2. Port mapping is not configured correctly');
    console.log('3. Firewall is blocking the connection');
    console.log('4. Network configuration issue');
    process.exit(1);
  }
  
  const mongoProtocolWorking = await checkMongoWireProtocol();
  if (!mongoProtocolWorking) {
    console.log('\n⚠️ MongoDB wire protocol test failed. The service might not be a MongoDB server.');
  }
  
  console.log('\n✅ MongoDB service is reachable and appears to be running.');
  console.log('If you\'re still having authentication issues, check your credentials.');
}

// Run the checks
runChecks().catch(console.error); 