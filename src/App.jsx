import React from "react";
import Panel1 from "./panels/Panel1";
import Panel2 from "./panels/Panel2";
import Panel3 from "./panels/Panel3";

const App = () => {
  return (
    <div className="grid bg-primary place-items-center font-recoleta min-h-screen">
      <div className="p-6 grid gap-4 max-w-6xl w-full lg:w-6xl mx-auto">
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </div>
    </div>
  );
};

export default App;
