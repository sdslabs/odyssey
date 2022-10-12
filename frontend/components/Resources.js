import TextPlus from "./TextPlus";
import TextCircle from "./TextCircle";
import React, { useState } from "react";

const Resources = ({}) => {
    const [listVisible, setDivVisible] = useState(false);
    const [list2Visible, setDiv2Visible] = useState(false);
    const classNameGenerator = (...classes) => {
        return classes.join(" ");
    };

    return (
    <div className="about">
        <p onClick={() => setDivVisible(!listVisible)}>Resources For Beginners</p>
        <div className={classNameGenerator("list1") + " " + listVisible}>
        <div onClick={() => setDiv2Visible(!list2Visible)}>
        <TextPlus text="helo"/>
        <div className={classNameGenerator("textcirclecont")+" "+ list2Visible}>
            <TextCircle text="Lorem ipsum"/>
            <TextCircle text="Lorem ipsum"/>
            <TextCircle text="Lorem ipsum"/>
        </div>
        </div>
        <div onClick={() => setDiv2Visible(!list2Visible)}>
        <TextPlus text="helo"/>
        
        </div>
        <div onClick={() => setDiv2Visible(!list2Visible)}>
        <TextPlus text="helo"/>
        
        </div>
        </div>
    </div> 
    );
};

export default Resources;