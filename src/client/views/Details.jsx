import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

const Details = () => {
    const history = useHistory();

  const { id } = useParams();
  const [records, setRecords] = useState(null);

  const fetchApi = async () => {
    const res = await fetch(`/api/patientinfo/${id}`);
    const data = await res.json();
    setRecords(data);
  };

  useEffect(() => {
    fetchApi();
    return () => {};
  }, []);

  return (
    <div className='row'>
      <div className='col '>
        <h3>Detail Record</h3>
        <h4 className='card-title'>Josh Hurn</h4>
        <p className='card-text'>D.O.B.: 6-10-1992</p>
        <p className='card-text'>Email: josh@innovatebham.com</p>
        <p className='card-text'>Phone: 205-911-1119</p>
        <button
          onClick={() => history.goBack()}
          className='btn submit-button mt-5 mx-1 float-left'>
          Go Back
        </button>
      </div>
      <div className='col'>
        <Link to='/admin' className='link mb-5 float-right'>
          <input className='btn submit-button mr-3' type='reset' value='Edit' />
          <input className='btn submit-button' type='reset' value='Delete' />
        </Link>
        <p className='card-text mt-3'>
          <strong>Date of Visit: 8-13-2020</strong>
        </p>
        <p className='card-text'>Objectives: BTK</p>
        <p className='card-text'>Patient Concern(s): Pressure, Tightness</p>
        <p className='card-text'>Assessment: Too Tight</p>
        <p className='card-text'>Plan: Issue Resolved</p>
        <p className='card-text mb-5'>Medical Notation: N/A</p>

        <Link to='/admin' className='link mb-5 float-right'>
          <input className='btn submit-button mr-3' type='reset' value='Edit' />
          <input className='btn submit-button' type='reset' value='Delete' />
        </Link>
        <p className='card-text mt-3'>
          <strong>Date of Visit: 8-3-2020</strong>
        </p>
        <p className='card-text'>Objectives: BTK</p>
        <p className='card-text'>Patient Concern(s): Tightness</p>
        <p className='card-text'>Assessment: Too Tight</p>
        <p className='card-text'>Plan: One Week Follow-up</p>
        <p className='card-text mb-5'>Medical Notation: Rx provided</p>

        <Link to='/admin' className='link mb-5 float-right'>
          <input className='btn submit-button mr-3' type='reset' value='Edit' />
          <input className='btn submit-button' type='reset' value='Delete' />
        </Link>
        <p className='card-text mt-3'>
          <strong>Date of Visit: 10-13-2019</strong>
        </p>
        <p className='card-text'>Objectives: BTK</p>
        <p className='card-text'>
          Patient Concern(s): Pain, Pressure, Tightness
        </p>
        <p className='card-text'>Assessment: Too Tight</p>
        <p className='card-text'>Plan: Issue Resolved</p>
        <p className='card-text mb-5'>Medical Notation: N/A</p>
      </div>
    </div>
  );
};

export default Details;
