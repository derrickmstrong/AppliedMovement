import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import ResultsCard from './ResultsCard.jsx';
// import Details from '../views/Details.jsx'

const Results = () => {
  const [records, setRecords] = useState([]);

  const fetchApi = async () => {
    const res = await fetch('api/patientinfo');
    const data = await res.json();
    setRecords(data);
  };

  useEffect(() => {
    fetchApi();
    return () => {};
  }, []);

  return (
    <Fragment>
      <div className='row mb-4'>
        <div className='col'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search Records'
              aria-label='Search Records'
              aria-describedby='search-btn'
            />
            <div className='input-group-append' id='search-btn'>
              <button className='btn submit-button' type='button'>
                Search
              </button>
            </div>
            <Link to='patientinfo'>
              <button className='btn submit-button ml-3' type='button'>
                Add New Record
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3>Records</h3>

          {records.map((record) => (
            <ResultsCard key={record.id} record={record} />
          ))}
        </div>
        {/*<div className='col'>
          <Details />
        </div>
        */}
      </div>
    </Fragment>
  );
};

export default Results;
