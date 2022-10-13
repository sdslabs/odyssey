import EventCard from "../../components/EventCard";
import EventsPage from "../../components/EventsPage";

function Events({ Component, pageProps }) { 
  return (
    <div>
      <EventsPage />
      <h1 className="events_heading">Upcoming Events</h1>
      
      <div className="event_card">
      
      <EventCard />
      <EventCard />
      <EventCard />
      </div>
    </div>
  );
}

export default Events;
