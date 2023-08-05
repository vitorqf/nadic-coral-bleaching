import Reset from '@/styles/reset';
import theme from '@/styles/theme';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

interface MyAppProps extends AppProps {
  session: Session | null;
}

export default function App({ Component, pageProps, session }: MyAppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Reset />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
