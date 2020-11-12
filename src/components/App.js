import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  useEffect(() => {
    document.addEventListener("keydown", arrowKeyPressed);
  });

  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: 0,
      top: 0,
    });
  };

  const start = () => {
    setRenderBall(true);
  };

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    }
    return (
      <button onClick={start} className="start">
        Start
      </button>
    );
  };

  const arrowKeyPressed = (e) => {
    if (e.keyCode == 39 && renderBall) {
      setX((prevState) => prevState + 5);
      setBallPosition({ left: x });
    }
    if (e.keyCode == 37 && renderBall) {
      setX((prevState) => prevState - 5);
      setBallPosition({ left: x });
    }
    if (e.keyCode == 40 && renderBall) {
      setY((prevState) => prevState + 5);
      setBallPosition({ top: y });
    }
    if (e.keyCode == 38 && renderBall) {
      setY((prevState) => prevState - 5);
      setBallPosition({ top: y });
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
