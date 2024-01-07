import { useState } from "react";
import "./App.css";
import { Tooltip } from "./components";

function App() {
  const location = ["top", "right", "bottom", "left"];
  const [currLocation, setCurrentLocation] = useState("top");

  const handleClick = (e) => {
    setCurrentLocation(e.target.innerText);
  };

  return (
    <div>
      Select position for tooltip:
      {location.map((loc) => (
        <button key={loc} onClick={handleClick} className={`button ${loc === currLocation ? "active" : ""}`}>
          {loc}
        </button>
      ))}

      <div className="tooltip-container">
        <Tooltip currLocation={currLocation} />
      </div>
    </div>
  );
}

export default App;
