import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import "../styles/userpanel.scss"
import "../styles/repo.scss"
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
