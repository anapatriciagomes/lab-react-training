import { useState } from 'react';

function getContrastYIQ(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? 'black' : 'white';
}

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const [buttonColor, setButtonColor] = useState('blue');
  const [textColor, setTextColor] = useState('white');

  const colors = [
    '#a103fc',
    '#034efc',
    '#80fc03',
    '#fce303',
    '#fc9d03',
    '#fc2c03',
  ];

  const likesClickHandle = () => {
    setLikeCount(likeCount + 1);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const newButtonColor = colors[randomColorIndex];
    setButtonColor(newButtonColor);
    setTextColor(getContrastYIQ(newButtonColor));
  };

  return (
    <div>
      <h1>LikeButton</h1>
      <button
        onClick={likesClickHandle}
        style={{ backgroundColor: buttonColor, color: textColor }}
        id="like-button"
      >
        {likeCount} Likes
      </button>
    </div>
  );
}

export default LikeButton;
