import Script from 'next/script';
import { ThemeProvider } from 'next-themes'; /* Allow us to alter between light and dark modes */

import { NavBar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  /* Allows you to change set light or dark mode depending on different classes */
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/d627973adf.js" crossorigin="anonymous" />
  </ThemeProvider>

);
export default MyApp;
