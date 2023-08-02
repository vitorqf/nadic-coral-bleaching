import Reset from '@/styles/reset';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
