import React from 'react';
// import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Details = () => {
  // const { id } = useParams();
  const history = useHistory();
  // const [records, setRecords] = useState(null);

  // const fetchApi = async () => {
  //   const res = await fetch(`/api/patientinfo/${id}`);
  //   const data = await res.json();
  //   setRecord(data);
  // };

  // useEffect(() => {
  //   fetchApi();
  //   return () => {};
  // }, []);

  // REMEMBER TO REFERENCE FullStackChirp - Details.jsx in views folder
  return (
    <div>
      <h3>Detail Record</h3>
      <div className='col-md-12 mb-4'>
        <div className='card shadow'>
          <div className='card-body text-center'>
            <h4 className='card-title'>Patient Name</h4>
            <p className='card-text'>D.O.B.</p>
            <p className='card-text'>Email</p>
            <p className='card-text'>Phone</p>
            <div className='d-flex justify-content-end align-items-center'></div>
          </div>
        </div>
      </div>
      <Link to='/admin' className='link'>
        <input className='btn submit-button mr-3' type='reset' value='Edit' />
        <input className='btn submit-button' type='reset' value='Delete' />
      </Link>
    </div>
  );
};

export default Details;