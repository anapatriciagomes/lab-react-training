import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';

function App() {
  return (
    <div className="App">
      <IdCard />
      <Greetings />
      <Random />
      <BoxColor />
      <CreditCard />
      <Rating />
      <DriverCard />
      <LikeButton />
      <ClickablePicture />
      <Dice />
      <Carousel />
      <NumbersTable />
      <FaceBook />
    </div>
  );
}

export default App;
