import React from "react";
import { useState } from "react";

function Random_Color_Generator() {
  const [color, setColor] = useState("#000000");
  const [isHex, setIsHex] = useState(true);

  function hexColor() {
    let hex = "#";
    let letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    setColor(hex);
    console.log("hex color : ", hex);
  }

  function rgbColor() {
    let rgb = `rgb( ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    setColor(rgb);
    console.log("rgb color : ", rgb);
  }

  return (
    <>
      <div>
        <div className="bg-gray-400">
          <button
            className="bg-white rounded p-2 m-2"
            onClick={() => setIsHex(true)}
          >
            Create Hex Color
          </button>
          <button
            className="bg-white rounded p-2 m-2"
            onClick={() => setIsHex(false)}
          >
            Create rgb Color
          </button>
          <button
            className="bg-white rounded p-2 m-2"
            onClick={() => (isHex ? hexColor() : rgbColor())}
          >
            Generate Random Color
          </button>
        </div>

        <div className={`w-screen h-screen`} style={{ backgroundColor: color }}>
          <p className="text-center text-red-300 text-2xl">
            {isHex ? "Hex Color" : "rgb Color"}
          </p>

          <p className="text-center text-red-300 text-2xl">{color}</p>
        </div>
      </div>
    </>
  );
}

export default Random_Color_Generator;
