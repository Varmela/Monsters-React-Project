import React, { useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import useFetch from './FetchData';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const response = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMonsters = response.data?.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={{ textAlign: "center" }}>
    <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CardList monsters={searchTerm === '' ? response.data : filteredMonsters} />
    </div>
  );
}

export default App;
