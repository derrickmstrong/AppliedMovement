import * as React from 'react';
import { useHistory } from 'react-router-dom';

const ResultsCard = (props) => {
  const history = useHistory();

  return (
    <div className='col-md-6 mx-1'>
      <div
        onClick={() => history.push(`/details/${props.record.id}`)}
        className='card my-2 shadow'>
        <div className='card-body text-center'>
          <h4 className='card-title'>{props.record.name}</h4>
          <p className='card-text'>{props.record.dateOfBirth}</p>
          <p className='card-text'>{props.record.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
