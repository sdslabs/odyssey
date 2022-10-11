import Navbar from "../components/Navbar";
import Card from "../components/Card";
import EventCard from "../components/EventCard";
import AboutCard from "../components/AboutCard";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <AboutCard />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
