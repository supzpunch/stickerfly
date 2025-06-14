import NextAuth from 'next-auth';
import { authOptions } from '../options';

// Force dynamic rendering to avoid caching issues
export const dynamic = 'force-dynamic';

// Determine if we're using HTTPS based on the NEXTAUTH_URL
const isHttps = process.env.NEXTAUTH_URL?.startsWith('https') ?? false;

// For non-HTTPS environments in production, we need to disable secure cookies
const useSecureCookies = process.env.NODE_ENV === 'production' && isHttps;

// Log configuration for debugging
console.log(`NextAuth Configuration: NODE_ENV=${process.env.NODE_ENV}, useSecureCookies=${useSecureCookies}`);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 