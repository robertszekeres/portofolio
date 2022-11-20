import { React, useState } from "react";
import "./index.css";

export function CounterApp({value}) {
  // - const counter = 0;
  const [counter, setCounter] = useState(value);

  //   - Add
  const handleAdd = () => {
    setCounter(counter + 1);

    // - Autre maniere de changer l'etat

    // setCounter((c) => {
    //   return c + 1;
    // });
  };

  //   - Substract
  const handleSubstract = () => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };

  //   - Reset
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="counterApp">
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button className="bp" onClick={handleAdd}>
        + 1
      </button>
      <button className="bm" onClick={handleSubstract}>
        - 1
      </button>
      <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
    </div>
  );
}
