import React, { useState } from "react";

const PullMerge = ({}) => {
    const [listVisible, setDivVisible] = useState(false);
    const classNameGenerator = (...classes) => {
        return classes.join(" ");
    };

    return (
    <div className="about">
        <p onClick={() => setDivVisible(!listVisible)}>Pull Merge Request Details</p>
        <div className={classNameGenerator("list1") + " " + listVisible}>
            
        </div>
    </div> 
    );
};

export default PullMerge;