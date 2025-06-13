import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    } & DefaultSession['user'];
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: any;
        promise: Promise<any> | null;
      };
    }
  }
} 