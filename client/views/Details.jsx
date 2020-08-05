import React from 'react'

const Details = () => {
    return (
      <div>
        <h3>Detail Record</h3>
        <p>Detailed patient info here</p>
        <Link to='/admin' className='link'>
          <input className='btn submit-button mr-3' type='reset' value='Edit' />
          <input className='btn submit-button' type='reset' value='Delete' />
        </Link>
      </div>
    );
}

export default Details
