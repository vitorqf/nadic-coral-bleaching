import { prisma } from '@/lib/prisma';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          type: 'email',
        },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const { email, password } = credentials;

        const existingUser = await prisma.user.findUnique({
          where: {
            email: email,
          },
          select: {
            email: true,
            id: true,
            password: true,
            name: true,
            role: true,
          },
        });

        if (!existingUser) {
          throw new Error('No user found for this email');
        }

        const passwordMatch = password === existingUser.password;

        if (!passwordMatch) {
          throw new Error('Invalid password');
        }

        return existingUser;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
export default NextAuth(authOptions);
