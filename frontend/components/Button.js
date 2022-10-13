import React, { useState } from "react";

const Button = () => {
  const [buttonActive, setButtonActive] = useState(false);
  //const [btnActive, setBtnActive] = useState(false);
  const classNameGenerator = (...classes) => {
    return classes.join(" ");
  };

  return (
    <button
      onClick ={() => setButtonActive(!buttonActive)}
      //onMouseOut ={() => setButtonActive(!buttonActive)}
      //onClick ={() => setBtnActive(!btnActive)}
      className={classNameGenerator("btn") + " " + buttonActive}
    >
      LOREM IPSUM
    </button>
  );
};

export default Button;

