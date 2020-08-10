import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (searchTerm.length > 3) {
      fetch('api/patientinfo/search/' + searchTerm)
        .then((r) => r.json())
        .then((res) => {
          setResults(res);
        });
    }
  }, [searchTerm]);
  return (
    <>
      <div className='search-field'>
        <input type='text' onChange={(ev) => setSearchTerm(ev.target.value)} />
      </div>
      <ul className='results'>
        {results.map((result) => (
          <li>
            <Link to={'/details?id=' + result.id}>{result.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Search;
