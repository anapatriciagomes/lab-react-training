import { useState } from 'react';
import normalPicture from '../assets/images/maxence.png';
import glassesPicture from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [image, setImage] = useState(normalPicture);

  const handleImage = () => {
    image === normalPicture
      ? setImage(glassesPicture)
      : setImage(normalPicture);
  };

  return (
    <div>
      <h1>Clickable Picture</h1>
      <img src={image} alt="maxence" onClick={handleImage} id="maxence-image" />
    </div>
  );
}

export default ClickablePicture;
