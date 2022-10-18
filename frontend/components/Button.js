import React, { useState } from "react";

const Button = ({ text, onClick }) => {
  const [buttonActive, setButtonActive] = useState(false);
  const classNameGenerator = (...classes) => {
    return classes.join(" ");
  };

  return (
    <button
      onMouseDown={() => setButtonActive(!buttonActive)}
      onMouseUp={() => setButtonActive(!buttonActive)}
      className={classNameGenerator("btn") + " " + buttonActive}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
