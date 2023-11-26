import cardsData from '../data/creditCards.json';
import visaLogo from '../assets/images/visa-logo.png';
import masterCardLogo from '../assets/images/master-card-logo.png';

function calculateLuminance(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function CreditCard() {
  const cardsList = cardsData.map((card) => {
    // Calculate luminance of the background color
    const luminance = calculateLuminance(card.bgColor);

    const textColor = luminance > 0.5 ? 'black' : 'white';

    return (
      <div
        key={card.number}
        className="credit-card"
        style={{ backgroundColor: `${card.bgColor}`, color: textColor }}
      >
        <img
          src={card.type === 'Visa' ? visaLogo : masterCardLogo}
          alt="card-logo"
        />
        <p className="card-number">•••• •••• •••• {card.number.slice(-4)}</p>
        <div className="card-details">
          <p>
            {card.expirationMonth}/{card.expirationYear}
          </p>
          <p>{card.bank}</p>
        </div>
        <p className="card-owner">{card.owner}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>CreditCard</h1>
      <div className="cards-list">{cardsList}</div>
    </div>
  );
}

export default CreditCard;
