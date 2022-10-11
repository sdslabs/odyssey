import Navbar from "../components/Navbar";
import Card from "../components/Card";
import EventCard from "../components/EventCard";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Card />
      <EventCard />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
