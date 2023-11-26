import { useState } from 'react';

function Random() {
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(10);

  const handleMinNumberChange = (event) => {
    const newMinNumber = parseInt(event.target.value);
    if (!isNaN(newMinNumber) && newMinNumber < maxNumber) {
      setMinNumber(newMinNumber);
    } else {
      setMinNumber(maxNumber - 1);
    }
  };

  const handleMaxNumberChange = (event) => {
    const newMaxNumber = parseInt(event.target.value);
    if (!isNaN(newMaxNumber) && newMaxNumber > minNumber) {
      setMaxNumber(newMaxNumber);
    } else {
      setMaxNumber(minNumber + 1);
    }
  };

  const randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber) + minNumber
  );

  return (
    <div>
      <h1>Random</h1>
      <div className="number-inputs">
        <label htmlFor="min-input">Minimum:</label>
        <input
          id="min-input"
          type="number"
          placeholder="1"
          value={minNumber}
          onChange={handleMinNumberChange}
        />
        <label htmlFor="max-input">Maximum:</label>
        <input
          id="max-input"
          type="number"
          placeholder="10"
          value={maxNumber}
          onChange={handleMaxNumberChange}
        />
      </div>
      <p>
        Random value between {minNumber} and {maxNumber} => {randomNumber}
      </p>
    </div>
  );
}

export default Random;
