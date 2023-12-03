import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRInputChange = (event) => {
    setRValue(event.target.value);
  };

  const handleGInputChange = (event) => {
    setGValue(event.target.value);
  };
  const handleBInputChange = (event) => {
    setBValue(event.target.value);
  };

  return (
    <div>
      <h1>RGB Color Picker</h1>
      <SingleColorPicker
        color="red"
        value={rValue}
        onChange={handleRInputChange}
      />

      <SingleColorPicker
        color="green"
        value={gValue}
        onChange={handleGInputChange}
      />

      <SingleColorPicker
        color="blue"
        value={bValue}
        onChange={handleBInputChange}
      />
      <div className="rgb-color-final">
        <div
          style={{
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            width: 30,
            height: 30,
          }}
        ></div>
        <p>
          rgb({rValue}, {gValue}, {bValue})
        </p>
      </div>
    </div>
  );
}

export default RGBColorPicker;
