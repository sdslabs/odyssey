import '../styles/Card.module.css'

const Card = ({ somePropsPropertiesHere }) => {
    return (
    <div className="card">
        <div className="card__container">
          <h4><b>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</b></h4>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
          <button>Read More</button>
        </div>
    </div> 
    );
  };

export default Card;