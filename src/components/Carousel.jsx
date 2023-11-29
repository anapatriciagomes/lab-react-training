import { useState } from 'react';

function Carousel() {
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
  ];

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[0]);

  const handleLeftClick = () => {
    index === 0 ? setIndex(3) : setIndex(index - 1);
    setImage(images[index]);
  };

  const handleRightClick = () => {
    index === 3 ? setIndex(0) : setIndex(index + 1);
    setImage(images[index]);
  };

  return (
    <div>
      <h1>Carousel</h1>
      <div className="images-carousel">
        <button onClick={handleLeftClick}>Left</button>
        <img src={image} alt="person" width={200} height={200} />
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
