import React, { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0);

  const countHandler = (action) => {
    if (action === "increase") {
      setCount((prev) => prev + 1);
    } else if (action === "decrease") {
      setCount((prev) => (prev > 0 ? count - 1 : prev));
    } else {
      return;
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => countHandler("increase")}>Increase</button>
      <button onClick={() => countHandler("decrease")}>Decrease</button>
    </div>
  );
};

export default StateExample;
