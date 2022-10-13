import Button from "./Button";
const EventsPage = () => {
  return (
    <div className="placard">
      <div className="placard-icons">
	  	<img className="placard-icons-instagram" src="/images/instagram2.svg" alt="instagram" />
	    <img className="placard-icons-github" src="/images/github2.svg" alt="github" />	
	  </div>
      <div className="placard-text">
        <div>
          <h1>Lorem ipsum dolor sit</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            ametLorem ipsum dolor sit amet 
          </p>
        </div>
        <div className="event_btn">
          <Button />
        </div>
      </div>
      <div className="rightlane">
        <div className="event_logo">
        <img src="/images/event_logo.svg" alt="event_logo" />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
