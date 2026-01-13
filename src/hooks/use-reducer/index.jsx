import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count > 0 ? state.count - 1 : state.count };
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>Increase</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrease</button>
    </div>
  );
};

export default ReducerExample;
