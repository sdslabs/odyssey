import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.scss";
import "../styles/repo.scss"
import "../styles/Profile.scss";
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
