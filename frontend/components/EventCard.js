import PropTypes from 'prop-types'

const EventCard = ({date, heading, description}) => {
    return (
    <div className="card">
        <div className="card__container">
            <div class="date">
                <h5>{date}</h5>
            </div>
            <div class="card_content">
            <h3><b>{heading}</b></h3>
            {description}
            </div>
        </div>
    </div> 
    );
  };

export default EventCard;