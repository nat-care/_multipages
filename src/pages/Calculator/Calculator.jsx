import React, { useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  const [output, setOutput] = useState("");
  const specialChars = ["/", "*", "+", "-", ".", "%"];

  const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== "") {
      setOutput(eval(output.replace("%", "/100")).toString());
    } else if (btnvalue === "AC") {
      setOutput("");
    } else if (btnvalue === "DEL") {
      setOutput(output.slice(0, -1));
    } else {
      if (output === "" && specialChars.includes(btnvalue)) return;
      setOutput(output + btnvalue);
    }
  };

  const checkKeyboard = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      calculate("=");
    } else if (e.key === "Backspace") {
      calculate("DEL");
    } else if (e.key === "+" || e.key === "=") {
      calculate("+");
    } else if (e.key === "-") {
      calculate("-");
    } else if (e.key >= "0" && e.key <= "9") {
      calculate(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", checkKeyboard);
    return () => {
      document.removeEventListener("keydown", checkKeyboard);
    };
  }, [output]);

  return (
    <div className="calculator-container">
      <input type="text" className="display" readonly value={output} />

      <div className="buttons">
      <button className="operator" onClick={() => calculate("AC")}>
          AC
        </button>
        <button className="operator" onClick={() => calculate("DEL")}>
          DEL
        </button>
        <button className="operator" onClick={() => calculate("%")}>
          %
        </button>
        <button className="operator" onClick={() => calculate("/")}>
          /
        </button>

        <button onClick={() => calculate("7")}>7</button>
        <button onClick={() => calculate("8")}>8</button>
        <button onClick={() => calculate("9")}>9</button>
        <button className="operator" onClick={() => calculate("*")}>
          &times;
        </button>

        <button onClick={() => calculate("4")}>4</button>
        <button onClick={() => calculate("5")}>5</button>
        <button onClick={() => calculate("6")}>6</button>
        <button className="operator" onClick={() => calculate("-")}>
          -
        </button>

        <button onClick={() => calculate("1")}>1</button>
        <button onClick={() => calculate("2")}>2</button>
        <button onClick={() => calculate("3")}>3</button>
        <button className="operator" onClick={() => calculate("+")}>
          +
        </button>

        <button onClick={() => calculate("0")}>0</button>
        <button onClick={() => calculate("00")}>00</button>
        <button onClick={() => calculate(".")}>.</button>
        <button className="operator" onClick={() => calculate("=")}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
