import { useState } from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const translations = {
  en: {
    greeting: 'Hello',
  },
  de: {
    greeting: 'Hallo',
  },
  es: {
    greeting: 'Hola',
  },
  fr: {
    greeting: 'Bonjour',
  },
};

function Greetings() {
  const flagIcons = ['GB', 'DE', 'ES', 'FR'];

  const [countryCode, setCountryCode] = useState('en');
  const [greetingText, setGreetingText] = useState(translations['en'].greeting);
  const [name, setName] = useState('');

  const flagClick = (country) => {
    const selectedCountry = () => {
      if (country === 'GB') {
        return 'en';
      } else if (country === 'DE') {
        return 'de';
      } else if (country === 'ES') {
        return 'es';
      } else if (country === 'FR') {
        return 'fr';
      }
    };
    const newCountryCode = selectedCountry();
    setCountryCode(newCountryCode);
    setGreetingText(translations[newCountryCode].greeting);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const flags = flagIcons.map((flagIcon, index) => {
    return (
      <button key={index} onClick={() => flagClick(flagIcon)}>
        {getUnicodeFlagIcon(flagIcon)}
      </button>
    );
  });

  return (
    <div>
      <h1>Greetings</h1>
      <div className="flag-icons">{flags}</div>
      <input
        id="name-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <div className="greeting-text" lang={countryCode}>
        {greetingText}
        {name && `, ${name}`} {/* Include name if it's not empty */}
      </div>
    </div>
  );
}

export default Greetings;
