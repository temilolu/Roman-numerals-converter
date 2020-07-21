import React, { useState } from "react";
import { RomanNumerals } from "./helper";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState("");
  const [textValue, setTextValue] = useState("");

  return (
    <div className="App">
      <h1>Roman numerals Converter</h1>
      <div className="d-section">
        <div>
          <p>Convert to Roman Figure</p>
          <input
            type="number"
            value={value}
            name="amount"
            onChange={e => setValue(e.target.value)}
            placeholder="Enter number from 1 to 5000"
          />

          <span>{RomanNumerals.toRoman(value)} </span>
        </div>
        <br />
        <div>
          <p>Convert to Figure</p>
          <input
            type="text"
            value={textValue}
            name="amount"
            onChange={e => setTextValue(e.target.value)}
            placeholder="Enter roman figure"
          />

          <span>{RomanNumerals.fromRoman(textValue)} </span>
        </div>
      </div>
    </div>
  );
};

export default App;
