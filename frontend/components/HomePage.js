import Button from "./Button";
const HomePage = () => {
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
        <div>
          <Button />
        </div>
      </div>
      <div className="rightlane">
        <div className="rightlogo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="odysseyimage">
          <img src="/images/home-illus.svg" alt="Odyssey" />
        </div>
      </div>
    </div>
  );
};
    
export default HomePage;
