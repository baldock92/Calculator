import "./App.css";
import React from "react";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [result, setResult] = useState("");

  const clearAll = () => {
    setResult(() => {
      return "";
    });
  };

  const showNum = (num) => {
    setResult((currentNum) => {
      return currentNum + num;
    });
  };

  const deleteNum = () => {
    setResult((currentNum) => {
      return currentNum.slice(0, -1);
    });
  };

  const singleOperators = ["+", "-", "x", "/", "²", "√", "."];

  const mathsFunc = (mathOperator) => {
    setResult((currentNum) => {
      const lastChar = currentNum.slice(-1);

      if (singleOperators.includes(lastChar)) {
        return currentNum.replace(/.$/, mathOperator);
      }
      return currentNum + mathOperator;
    });
  };

  const squareNum = () => {
    setResult((currentNum) => {
      const lastChar = currentNum.slice(-1);

      if (singleOperators.includes(lastChar)) {
        return currentNum.replace(/.$/, "²");
      } else {
        return currentNum + "²";
      }
    });
  };

  const flipPositive = () => {
    setResult((currentNum) => {
      if (currentNum[0] === "-") {
        return currentNum.replace("-", "");
      } else {
        return `-${currentNum}`;
      }
    });
  };

  const decimal = () => {
    setResult((currentNum) => {
      const lastChar = currentNum.slice(-1);

      if (singleOperators.includes(lastChar)) {
        return currentNum.replace(/.$/, ".");
      } else {
        return currentNum + ".";
      }
    });
  };

  const equalsFunc = () => {
    setResult((currentNum) => {
      singleOperators.forEach((oper) => {
        if (currentNum === oper) {
          return (currentNum = "0");
        }
      });
      const replaceOperators = currentNum
        .replaceAll("x", "*")
        .replaceAll("²", "**2");
      const answer = eval(replaceOperators).toString();

      return (currentNum = answer);
    });
  };

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Display result={result} /> */}
      <main>
        <Buttons
          result={result}
          showNum={showNum}
          clearAll={clearAll}
          deleteNum={deleteNum}
          mathsFunc={mathsFunc}
          squareNum={squareNum}
          flipPositive={flipPositive}
          decimal={decimal}
          equalsFunc={equalsFunc}
        />
      </main>
    </div>
  );
}

export default App;
