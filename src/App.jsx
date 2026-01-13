import React from "react";

import StateExample from "./hooks/use-state";
import EffectExample from "./hooks/use-effect";
import ContextExample from "./hooks/use-context";
import ReducerExample from "./hooks/use-reducer";
import RefExample from "./hooks/use-ref";

const App = () => {
  return (
    <div className="app">
      {/* <StateExample /> */}
      {/* <EffectExample /> */}
      {/* <ContextExample /> */}
      {/* <ReducerExample /> */}
      <RefExample />
    </div>
  );
};

export default App;
