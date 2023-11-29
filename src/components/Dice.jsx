import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const dice = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [diceResult, setDiceResult] = useState(dice3);

  const handleDiceClick = () => {
    setDiceResult(emptyDice);
    const randomIndex = Math.floor(Math.random() * dice.length);
    setTimeout(() => {
      setDiceResult(dice[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <h1>Dice</h1>
      <img
        src={diceResult}
        alt="dice"
        onClick={handleDiceClick}
        id="dice-image"
      />
    </div>
  );
}

export default Dice;
