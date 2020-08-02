import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Admin = () => {
  const history = useHistory();
  const { id } = useParams();

  const [state, setState] = useState({
    name: '',
    phone: '',
    dateOfBirth: '',
    email: '',
    leg: '',
    arm: '',
    partialFoot: '',
    backBrace: '',
    kneeBrace: '',
    ankleBrace: '',
    shoes: '',
    inserts: '',
    pain: '',
    pressure: '',
    rubbing: '',
    tightness: '',
    looseness: '',
    tooTall: '',
    tooShort: '',
    lateralShifting: '',
    medialShifting: '',
    noToeClearance: '',
    issueResolved: '',
    oneWeek: '',
    limitedWear: '',
    unlimitedWear: '',
    refer: '',
    medicalNotation: '',
  });

  const editRecord = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        dateOfBirth,
        email,
        leg,
        arm,
        partialFoot,
        backBrace,
        kneeBrace,
        ankleBrace,
        shoes,
        inserts,
        pain,
        pressure,
        rubbing,
        tightness,
        looseness,
        tooTall,
        tooShort,
        lateralShifting,
        medialShifting,
        noToeClearance,
        issueResolved,
        oneWeek,
        limitedWear,
        unlimitedWear,
        refer,
        medicalNotation,
      }),
    });

    if (res.ok) {
      history.push('/');
    } else {
      console.log('Something went wrong');
    }
  };

  const deleteRecord = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      history.push('/');
    } else {
      console.log('Something went wrong');
    }
  };

  const fetchApi = async () => {
    let res = await fetch(`/api/${id}`);
    let record = await res.json();
    console.log(record);
    setState(record);
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  // TODO: Note: on line 119 we need to insert  value={name}
  // TODO: Note: on line 131 we need to insert  value={dateOfBirth}

  return (
    <main className='container'>
      <section className='row my-2 justify-content-center'>
        <div className='col-md-8'>
        <h3 className='text-center'>Admin Panel</h3>
          <form className='form-group p-3 shadow border'>
            <label htmlFor='name'>Patient Name</label>
            <input
              onChange={(e) => {
                const value = e.target.value;
                setState({ ...state, [event.target.name]: value });
              }}
              id='name'
              name='name'
              type='text'
              className='form-control'
            />
            <label htmlFor='dateOfBirth'>Date of Birth</label>
            <input
              onChange={(e) => {
                const value = e.target.value;
                setState({ ...state, [event.target.name]: value });
              }}
              id='dateOfBirth'
              name='dateOfBirth'
              type='text'
              className='form-control'
            />
            <button
              onClick={editRecord}
              className='btn submit-button btn-block mt-3 w-50 mx-auto shadow-sm'>
              Save Changes
            </button>
            <button
              onClick={deleteRecord}
              className='btn alt-button btn-block mt-3 w-50 mx-auto shadow-sm'>
              Delete Record
            </button>
          </form>
          <button
            onClick={() => history.goBack()}
            className='btn btn-sm submit-button mx-2'>
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
};

export default Admin;
