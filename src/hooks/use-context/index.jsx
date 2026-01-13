import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ setIsToggle, isToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
  const { setIsToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <p>Current State: {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ContextExample;
