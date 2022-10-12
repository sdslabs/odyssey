import Navbar from "../components/Navbar";
import CodeOfConduct from "../components/CodeOfConduct";
import Resources from "../components/Resources";
import PullMerge from "../components/PullMerge";
import ParticipationDetails from "../components/ParticipationDetails";
import Values from "../components/Values";
import "../styles/globals.scss";
import "../styles/About.scss";
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Values />
      <ParticipationDetails />
      <Resources />
      <PullMerge />
      <CodeOfConduct />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
