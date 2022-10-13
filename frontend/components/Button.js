import React, { useState } from "react";

const Button = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const classNameGenerator = (...classes) => {
    return classes.join(" ");
  };

  return (
    <button
      onMouseDown={() => setButtonActive(!buttonActive)}
      onMouseUp={() => setButtonActive(!buttonActive)}
      className={classNameGenerator("btn") + " " + buttonActive}
    >
      LOREM IPSUM
    </button>
  );
};

export default Button;

