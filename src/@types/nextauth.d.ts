export interface IToken {
  id: string;
  role: string;
  email: string;
  sub: string;
  exp: number;
  iat: number;
  jti: string;
}

export interface IUser {
  id: string;
  role: string;
  email: string;
  name: string;
  password: string;
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }
}
