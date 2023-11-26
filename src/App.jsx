import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <IdCard />
      <Greetings />
      <Random />
      <BoxColor />
      <CreditCard />
      <Rating />
    </div>
  );
}

export default App;
