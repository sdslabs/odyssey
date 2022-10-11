import PropTypes from 'prop-types'
import ListIcon from './../public/images/list.svg'
import Image from 'next/image'

const Value = ({text}) => {
    return (
    <div className="value">
        <p><Image class="memberimage" src={ListIcon} />{ text }</p>
    </div> 
    );
};

Value.defaultProp={
    text: "Lorem Ipsum"
}

Value.defaultProp={
    text: PropTypes.string
}

export default Value;