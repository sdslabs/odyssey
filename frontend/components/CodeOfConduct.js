import React, { useState } from "react";

const CodeOfConduct = ({}) => {
    const [listVisible, setDivVisible] = useState(false);
    const classNameGenerator = (...classes) => {
        return classes.join(" ");
    };

    return (
    <div className="about">
        <p onClick={() => setDivVisible(!listVisible)}>Code Of Conduct</p>
        <div className={classNameGenerator("list1") + " " + listVisible}>
            
        </div>
    </div> 
    );
};

export default CodeOfConduct;