import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';

const theme = {
  html: {
    fontFamily: 'Inter',
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
