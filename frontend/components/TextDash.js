import PropTypes from 'prop-types'
import ListIconDash from './../public/images/list_dash.svg'
import Image from 'next/image'

const TextDash = ({text}) => {
    return (
    <div className="textsmall">
        <Image src={ListIconDash} width={25}/><p>{ text }</p>
    </div> 
    );
};

TextDash.defaultProp={
    text: "Lorem Ipsum"
}

TextDash.defaultProp={
    text: PropTypes.string
}

export default TextDash;