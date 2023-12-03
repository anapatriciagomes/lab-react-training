import { useState } from 'react';
import contactList from '../data/berlin.json';

function FaceBook() {
  const [contacts, setContacts] = useState(contactList);
  const [showContacts, setShowContacts] = useState(contactList);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [imageClicked, setImageClicked] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const dataList = showContacts.map((contact, index) => {
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
          onClick={() => handleImageClick(contact.img)}
        />
        {contact.img === imageClicked ? (
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
        ) : (
          ''
        )}
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

  const countryButtons = countriesList.map((country, index) => {
    return (
      <button
        key={index}
        onClick={() => handleCountryClick(country)}
        style={{
          backgroundColor: country === selectedCountry ? '#42cef5' : '#EFEFEF',
        }}
      >
        {country}
      </button>
    );
  });

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleImageClick = (image) => {
    imageClicked === null ? setImageClicked(image) : setImageClicked(null);
  };

  const handleSortByName = () => {
    const sortedList = [...showContacts].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );

    setShowContacts(sortedList);
  };

  const handleSortByCountry = () => {
    const sortedList = [...showContacts].sort((a, b) =>
      a.country.localeCompare(b.country)
    );

    setShowContacts(sortedList);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.firstName
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        contact.country
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase())
    );
    setShowContacts(filteredContacts);
  };

  return (
    <div>
      <h1>FaceBook</h1>
      <div className="country-buttons">{countryButtons}</div>
      <button onClick={handleSortByName} className="sortButton">
        Sort by Name
      </button>
      <button onClick={handleSortByCountry} className="sortButton">
        Sort by Country
      </button>
      <br />
      <input
        type="text"
        id="facebook-search-input"
        placeholder="Search"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <div className="data-list">{dataList}</div>
    </div>
  );
}

export default FaceBook;
