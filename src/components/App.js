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
    setBallPosition({ left: x, top: y });
  }, [x, y]);

  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: 0,
      top: 0,
    });
  };
  const arrowKeyPressed = (e) => {
    if (e.keyCode == 39) {
      setX((prev) => prev + 5);
    }
    if (e.keyCode == 37) {
      setX((prev) => prev - 5);
    }
    if (e.keyCode == 40) {
      setY((prev) => prev + 5);
    }
    if (e.keyCode == 38) {
      setY((prev) => prev - 5);
    }
  };

  const start = () => {
    setRenderBall(true);
    window.addEventListener("keydown", arrowKeyPressed);
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
