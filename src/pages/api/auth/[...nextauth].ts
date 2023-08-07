import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
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
        });

        if (!existingUser) {
          throw new Error('No user found for this email');
        }

        const passwordMatch = bcrypt.compareSync(
          password,
          existingUser.password
        );

        if (!passwordMatch) {
          throw new Error('Invalid password');
        }

        return existingUser;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    session: async ({ session, token }: { session: any; token: any }) => {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/entrar',
  },
};
export default NextAuth(authOptions);
