import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Console Log</button>
    </div>
  );
};

export default RefExample;
