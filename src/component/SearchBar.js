import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${value}`
      );
      setResults(res.data.results);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (item) => {
    const mediaType = item.media_type; 
    const id = item.id;
    navigate(`/details/${mediaType}/${id}`);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Search for a movie, tv show..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 rounded text-white bg-background border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {query && results.length > 0 && (
        <ul className="absolute bg-background w-full shadow-md mt-1 max-h-64 overflow-y-auto rounded border-2 border-primary">
          {results.map((item) => (
            <li
              key={item.id}
              className="p-2 text-white hover:bg-accent cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.title || item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
