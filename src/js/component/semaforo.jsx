import React, { useState, useEffect } from "react";

const Semaforo = () => {
  const [light, setlight] = useState("");

  useEffect(() => {
    if (light === "red") {
      setTimeout(() => {
        setlight("green");
      }, 3000);
    } else if (light === "green") {
      setTimeout(() => {
        setlight("yellow");
      }, 3000);
    } else if (light === "yellow") {
      setTimeout(() => {
        setlight("red");
      }, 3000);
    } else {
      setTimeout(() => {
        setlight("green");
      }, 3000);
    }
  }, [light]);

  function lighter() {
    if (light === color) {
      setlight("");
    } else {
      setlight(color);
    }
  }
  return (
    <>
      <div className="caja-palo">
        <div className="palo"></div>
      </div>
      <div className="caja">
        <div
          className={`light rojo ${light === "red" ? "rojo-on" : ""}`}
          onClick={() => {
            lighter("red");
          }}
        ></div>
        <div
          className={`light amarillo ${
            light === "yellow" ? "amarillo-on" : ""
          }`}
          onClick={() => {
            lighter("yellow");
          }}
        ></div>
        <div
          className={`light verde ${light === "green" ? "verde-on" : ""}`}
          onClick={() => {
            lighter("green");
          }}
        ></div>
      </div>
    </>
  );
};

export default Semaforo;
