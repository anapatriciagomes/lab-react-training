import { useState } from 'react';
import contactList from '../data/berlin.json';

function FaceBook() {
  const [contacts, setContacts] = useState(contactList);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const dataList = contacts.map((contact, index) => {
    return (
      <div
        key={index}
        className="contact-card"
        style={{
          backgroundColor:
            contact.country === selectedCountry ? '#42cef5' : 'white',
        }}
      >
        <img
          src={contact.img}
          alt={contact.firstName}
          width={100}
          height={100}
        />
        <div className="contact-details">
          <div>
            <b>First Name: </b>
            {contact.firstName}
          </div>
          <div>
            <b>Last Name: </b>
            {contact.lastName}
          </div>
          <div>
            <b>Country: </b>
            {contact.country}
          </div>
          <div>
            <b>Type: </b>
            {contact.isStudent ? 'Student' : 'Teacher'}
          </div>
        </div>
      </div>
    );
  });

  const fullCountriesList = contactList.map((contact) => contact.country);
  const countriesList = [];

  fullCountriesList.forEach((country) => {
    if (countriesList.includes(country) === false) {
      countriesList.push(country);
    }
  });

  const countryButtons = countriesList.map((country) => {
    return (
      <button onClick={() => handleCountryClick(country)}>{country}</button>
    );
  });

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>FaceBook</h1>
      <div className="country-buttons">{countryButtons}</div>
      <div className="data-list">{dataList}</div>
    </div>
  );
}

export default FaceBook;
