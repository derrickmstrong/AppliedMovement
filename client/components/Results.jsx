import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import ResultsCard from './ResultsCard.jsx';

const Results = () => {
  const [records, setRecords] = useState([]);

  const fetchApi = async () => {
    const res = await fetch('http://localhost:3000/api');
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
          {/* 
         {records.map((record) => (
            <ResultsCard key={record.id} record={record} />
          ))}
         */}
          <div className='col-md-12'>
            <div className='card my-2 shadow-drop-2-center'>
              <div className='card-body text-left'>
                <h4 className='card-title'>John Doe</h4>
                <p className='card-text'>DOB: 1/1/2020</p>
                <p className='card-text'>Email: johndoe@email.com</p>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='card my-2 shadow-drop-2-center'>
              <div className='card-body text-left'>
                <h4 className='card-title'>Jane Doe</h4>
                <p className='card-text'>DOB: 2/1/1985</p>
                <p className='card-text'>Email: janedoe20@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <h3>Detail Record</h3>
          <p>Detailed patient info here</p>
          <Link to='/admin' className='link'>
            <input
              className='btn submit-button mr-3'
              type='reset'
              value='Edit'
            />
            <input className='btn submit-button' type='reset' value='Delete' />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Results;
