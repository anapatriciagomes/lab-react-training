import driversData from '../data/drivers.json';

function DriverCard() {
  const starRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(rating)) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return <div className="stars">{stars}</div>;
  };

  const driversList = driversData.map((driver) => {
    return (
      <div key={driver.car.licensePlate} className="driver-card">
        <img src={driver.img} alt="driver" />
        <div className="driver-details">
          <h2>{driver.name}</h2>
          {starRating(driver.rating)}
          <p>{`${driver.car.model} - ${driver.car.licensePlate}`}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Driver Card</h1>
      {driversList}
    </div>
  );
}

export default DriverCard;
