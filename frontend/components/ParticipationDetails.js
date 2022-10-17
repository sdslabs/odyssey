import TextDash from "./TextDash";
import React, { useState } from "react";

const ParticipationDetails = ({}) => {
    const [listVisible, setDivVisible] = useState(false);
    const classNameGenerator = (...classes) => {
        return classes.join(" ");
    };
    return (
    <div className="about">
        <p onClick={() => setDivVisible(!listVisible)}>Participation Details</p>
        <div className={classNameGenerator("list1") + " " + listVisible + "list"}>
        <TextDash text="helo"/>
        <TextDash text="helo"/>
        <TextDash text="helo"/>
        </div>
    </div> 
    );
};

export default ParticipationDetails;