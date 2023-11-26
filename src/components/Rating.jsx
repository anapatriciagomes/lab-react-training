import { useState } from 'react';

function Rating() {
  const [rating, setRating] = useState(5);

  const handleRatingChange = (event) => {
    setRating(Math.round(event.target.value));
  };

  const starRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return <div className="stars">{stars}</div>;
  };

  return (
    <div>
      <h1>Rating</h1>
      <input
        type="number"
        id="rating-value"
        min={0}
        max={5}
        value={rating}
        placeholder="5"
        onChange={handleRatingChange}
      />
      <div className="star-rating"></div>
      {starRating(rating)}
    </div>
  );
}

export default Rating;
