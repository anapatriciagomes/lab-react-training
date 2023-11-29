import { useState } from 'react';

function NumbersTable() {
  const [numberLimit, setNumberLimit] = useState(10);

  const handleLimit = (event) => {
    const newLimit = event.target.value;
    setNumberLimit(newLimit);
  };

  const squares = () => {
    const elements = [];
    for (let i = 1; i <= numberLimit; i++) {
      const numberType = i % 2 === 0 ? 'even' : 'odd';

      elements.push(
        <div key={i} className={`number-square ${numberType}`}>
          <p>{i}</p>
        </div>
      );
    }
    return elements;
  };

  return (
    <div>
      <h1>Numbers Table</h1>
      <div className="number-limit">
        <label htmlFor="number">Number limit:</label>
        <input
          type="number"
          name="number"
          id="number"
          value={numberLimit}
          onChange={handleLimit}
        />
      </div>
      <div className="squares-flex">{squares()}</div>
    </div>
  );
}

export default NumbersTable;
