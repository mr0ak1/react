import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("RED");

  const changeColor = (event) => {
    console.log(event.target.innerText);
    setColor(event.target.innerText);
  };
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="btn-container fixed-bottom bg-dark">
          <button
            type="button"
            color="blue"
            class="btn btn-primary"
            onClick={changeColor}
          >
            BLUE
          </button>
          <button type="button" class="btn btn-secondary" onClick={changeColor}>
            GREY
          </button>
          <button type="button" class="btn btn-success" onClick={changeColor}>
            GREEN
          </button>
          <button type="button" class="btn btn-danger" onClick={changeColor}>
            RED
          </button>
          <button type="button" class="btn btn-warning" onClick={changeColor}>
            YELLOW
          </button>
          <button
            type="button"
            style={{ backgroundColor: "orange" }}
            class="btn"
            onClick={changeColor}
          >
            ORANGE
          </button>
          <button type="button" class="btn btn-light" onClick={changeColor}>
            WHITE
          </button>
          <button type="button" class="btn btn-dark" onClick={changeColor}>
            BLACK
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
