import { useState } from "react";
import Graph from "./components/Graph";
import "./App.css";
import WeightInput from "./components/WeightInput";
import FoodInput from "./components/FoodInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Graph />
      <WeightInput />
      <br></br>
      <FoodInput />
    </>
  );
}

export default App;
