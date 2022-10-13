import PropTypes from 'prop-types'
import Image from 'next/image'
const MemberCards = ({ imgsource, name}) =>{
    return(
        <figure class="membercard">
            <Image class="memberimage" src={ imgsource } alt={name} layout='responsive' width={200} height={200} />
            <figcaption class="membername">
                {name}
            </figcaption>
        </figure>
    )
}

MemberCards.defaultProp={
    imgsource:"/",
    name: "Lorem Ipsum"
}

MemberCards.defaultProp={
    imgsource: PropTypes.string,
    name: PropTypes.string
}
export default MemberCards
