// Simple script to check environment variables
console.log('Checking environment variables...');

// List of important environment variables to check
const importantVars = [
  'MONGODB_URI',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET',
  'NODE_ENV'
];

// Check each variable
importantVars.forEach(varName => {
  const value = process.env[varName];
  if (!value) {
    console.log(`❌ ${varName}: Not set`);
  } else {
    // Hide sensitive information in the output
    if (varName === 'MONGODB_URI') {
      console.log(`✅ ${varName}: ${value.replace(/:[^:@]+@/, ':****@')}`);
    } else if (varName === 'NEXTAUTH_SECRET') {
      console.log(`✅ ${varName}: ${value.substring(0, 3)}...${value.substring(value.length - 3)}`);
    } else {
      console.log(`✅ ${varName}: ${value}`);
    }
  }
});

// Check if we're in production and using HTTP
if (process.env.NODE_ENV === 'production' && 
    process.env.NEXTAUTH_URL && 
    process.env.NEXTAUTH_URL.startsWith('http:')) {
  console.log('\n⚠️ WARNING: Using HTTP in production with NextAuth can cause cookie issues.');
  console.log('Consider using HTTPS or setting NEXTAUTH_URL_INTERNAL=http://localhost:3000');
}

// Check MongoDB URI format
if (process.env.MONGODB_URI) {
  const uri = process.env.MONGODB_URI;
  
  // Check if URI contains the correct host
  if (!uri.includes('mcw484g0swo40g8cwwgos4cw')) {
    console.log('\n⚠️ WARNING: MONGODB_URI does not contain the expected hostname.');
    console.log('Expected: mcw484g0swo40g8cwwgos4cw');
  }
  
  // Check if URI has directConnection parameter
  if (!uri.includes('directConnection=true')) {
    console.log('\n⚠️ WARNING: MONGODB_URI does not include directConnection=true parameter.');
    console.log('This may be required for proper MongoDB connection in Coolify.');
  }
  
  // Check if password is properly URL encoded
  if (!uri.includes('%21') && uri.includes('stickerfly123!')) {
    console.log('\n⚠️ WARNING: The exclamation mark in the password is not URL encoded.');
    console.log('Use %21 instead of ! in the URI.');
  }
}

console.log('\nEnvironment check completed.'); 