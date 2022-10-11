import TextPlus from "./TextPlus";
import TextCircle from "./TextCircle";

const Resources = ({}) => {
    return (
    <div className="about">
        <p>Resources For Beginners</p>
        <TextPlus text="helo"/>
        <div className="textcirclecont">
            <TextCircle text="Lorem ipsum"/>
            <TextCircle text="Lorem ipsum"/>
            <TextCircle text="Lorem ipsum"/>
        </div>
        <TextPlus text="helo"/>
        <TextPlus text="helo"/>
    </div> 
    );
};

export default Resources;