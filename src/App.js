import React from "react";
import HelloWorld from "./HelloWorld"
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";

function App() {
  console.log(store);
  return (
    <div className="App">
      <HelloWorld tech ={store.getState().tech} />
      <ButtonGroup technologies= {["React-redux", "Redux", "Elm"]} />
    </div>
  );
}

export default App;
