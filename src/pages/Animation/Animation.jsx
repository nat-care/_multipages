import "./Animation.css";
import React, { useState, useEffect } from "react";

function Animation() {
  const fieldwidth = 700;
  const fieldheight = 400;
  const diameter = 100;

  const maxLeft = fieldwidth - diameter - 2;
  const maxTop = fieldheight - diameter - 2;
  const vx = 5;
  const vy = 5;

  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballImage, setBallImage] = useState("");

  const runClick = () => {
    setRunning(!running);
  };

  const calculate = () => {
    setX((prevX) => {
      if (goRight) {
        const newX = prevX + vx;
        if (newX >= maxLeft) {
          setGoRight(false);
        }
        return newX;
      } else {
        const newX = prevX - vx;
        if (newX <= 0) {
          setGoRight(true);
        }
        return newX;
      }
    });

    setY((prevY) => {
      if (goDown) {
        const newY = prevY + vy;
        if (newY >= maxTop) {
          setGoDown(false);
        }
        return newY;
      } else {
        const newY = prevY - vy;
        if (newY <= 0) {
          setGoDown(true);
        }
        return newY;
      }
    });
  };

  const changeBallImage = (url) => {
    setBallImage(url);
  };

  const noneClick = () => changeBallImage("none");
  const basketballClick = () => changeBallImage("./img/basketball.png");
  const footballClick = () => changeBallImage("./img/football.png");
  const volleyballClick = () => changeBallImage("./img/volleyball.png");
  const humanClick = () => changeBallImage("./img/human.jpg");
  const cartoonClick = () => changeBallImage("./img/cartoon.png");
  const logoClick = () => changeBallImage("./img/logo.png");

  useEffect(() => {
    const process = () => {
      if (running) {
        calculate();
      }
    };

    const interval = setInterval(process, 25);

    const checkKeyboard = (e) => {
      switch (e.key) {
        case " ":
          runClick();
          break;
        case "0":
          noneClick();
          break;
        case "1":
          basketballClick();
          break;
        case "2":
          footballClick();
          break;
        case "3":
          volleyballClick();
          break;
        case "4":
          humanClick();
          break;
        case "5":
          cartoonClick();
          break;
        case "6":
          logoClick();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", checkKeyboard);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", checkKeyboard);
    };
  }, [running, goRight, goDown]);

  return (
    <div className="animation-container">
      <div id="container">
        <div
          id="field"
          style={{ width: `${fieldwidth}px`, height: `${fieldheight}px` }}
        >
          <div
            id="ball"
            style={{
              width: `${diameter}px`,
              height: `${diameter}px`,
              left: `${x}px`,
              top: `${y}px`,
              backgroundImage: `url(${ballImage})`,
              position: "absolute",
            }}
          ></div>
        </div>
        <div id="control">
          <button
            id="run"
            className={`btn ${running ? "btn-warning" : "btn-success"}`}
            onClick={runClick}
          >
            <span className={`bi bi-${running ? "pause" : "play"}`}>
              &nbsp;{running ? "PAUSE" : "RUN"}
            </span>
          </button>
          <button className="btn btn-secondary" onClick={noneClick}>
            None
          </button>
          <button className="btn btn-outline-primary" onClick={basketballClick}>
            Basketball
          </button>
          <button className="btn btn-outline-primary" onClick={footballClick}>
            Football
          </button>
          <button className="btn btn-outline-primary" onClick={volleyballClick}>
            Volleyball
          </button>
          <button className="btn btn-outline-primary" onClick={humanClick}>
            Human
          </button>
          <button className="btn btn-outline-primary" onClick={cartoonClick}>
            Cartoon
          </button>
          <button className="btn btn-outline-primary" onClick={logoClick}>
            Logo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Animation;
