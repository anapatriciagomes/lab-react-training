import React, { useState } from 'react';

function getTextColor(red, green, blue) {
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 128 ? 'black' : 'white';
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(red, green, blue) {
  return (
    '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue)
  );
}

function BoxColor() {
  const [colorRed, setColorRed] = useState(13);
  const [colorGreen, setColorGreen] = useState(13);
  const [colorBlue, setColorBlue] = useState(13);

  const handleRedChange = (event) => {
    // Ensure the value is within the range of 0 to 255
    const value = Math.min(255, Math.max(0, event.target.value));
    setColorRed(value);
  };

  const handleGreenChange = (event) => {
    const value = Math.min(255, Math.max(0, event.target.value));
    setColorGreen(value);
  };

  const handleBlueChange = (event) => {
    const value = Math.min(255, Math.max(0, event.target.value));
    setColorBlue(value);
  };

  const textColor = getTextColor(colorRed, colorGreen, colorBlue);

  const hexCode = rgbToHex(colorRed, colorGreen, colorBlue);

  return (
    <div>
      <h1>BoxColor</h1>
      <div className="color-input">
        <input
          id="red-input"
          type="number"
          placeholder="13"
          value={colorRed}
          onChange={handleRedChange}
        />
        <input
          id="green-input"
          type="number"
          placeholder="13"
          value={colorGreen}
          onChange={handleGreenChange}
        />
        <input
          id="blue-input"
          type="number"
          placeholder="13"
          value={colorBlue}
          onChange={handleBlueChange}
        />
      </div>
      <div
        className="color-box"
        style={{
          backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`,
          color: textColor,
        }}
      >
        <p>
          rgb({colorRed}, {colorGreen}, {colorBlue})
        </p>
        <p>{hexCode}</p>
      </div>
    </div>
  );
}

export default BoxColor;
