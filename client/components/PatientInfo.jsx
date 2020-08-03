import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

const PatientInfo = () => {
  // Setup state for all form elements, toggles
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
    isLeg: null,
    isArm: null,
    isPartialFoot: null,
    isBackBrace: null,
    isKneeBrace: null,
    isAnkleBrace: null,
    isShoes: null,
    isInserts: null,
    isPain: null,
    isPressure: null,
    isRubbing: null,
    isTightness: null,
    isLooseness: null,
    isTooTall: null,
    isTooShort: null,
    isLateralShifting: null,
    isMedialShifting: null,
    isNoToeClearance: null,
    isIssueResolved: null,
    isOneWeek: null,
    isLimitedWear: null,
    isUnlimitedWear: null,
    isRefer: null,
  });

  const [selected, setSelected] = useState({
    isLeg: null,
    isArm: null,
    isPartialFoot: null,
    isBackBrace: null,
    isKneeBrace: null,
    isAnkleBrace: null,
    isShoes: null,
    isInserts: null,
    isPain: null,
    isPressure: null,
    isRubbing: null,
    isTightness: null,
    isLooseness: null,
    isTooTall: null,
    isTooShort: null,
    isLateralShifting: null,
    isMedialShifting: null,
    isNoToeClearance: null,
    isIssueResolved: null,
    isOneWeek: null,
    isLimitedWear: null,
    isUnlimitedWear: null,
    isRefer: null,
  });

  // isChecked = Toggles selected checkbox + Check to see if checkbox is checked/unchecked
  const isChecked = (event, currentCheckbox) => {
    // Toggle checkbox state
    const toggle = `!selected.${currentCheckbox}`;

    // setSelected of currentCheckbox to true or false
    setSelected({
      ...selected,
      [currentCheckbox]: [toggle],
    });

    // If checkbox is checked value is targets pre-defined value else value is an empty string
    if (event.target.checked) {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    } else {
      setState({
        ...state,
        [event.target.name]: '',
      });
    }
  };

  // handleCheckbox with for of loop
  const checkboxes = [
    ['leg', 'isLeg'],
    ['arm', 'isArm'],
    ['partialFoot', 'isPartialFoot'],
    ['backBrace', 'isBackBrace'],
    ['kneeBrace', 'isKneeBrace'],
    ['ankleBrace', 'isAnkleBrace'],
    ['shoes', 'isShoes'],
    ['inserts', 'isInserts'],
    ['pain', 'isPain'],
    ['pressure', 'isPressure'],
    ['rubbing', 'isRubbing'],
    ['tightness', 'isTightness'],
    ['looseness', 'isLooseness'],
    ['tooTall', 'isTooTall'],
    ['tooShort', 'isTooShort'],
    ['lateralShifting', 'isLateralShifting'],
    ['medialShifting', 'isMedialShifting'],
    ['noToeClearance', 'isNoToeClearance'],
    ['issueResolved', 'isIssueResolved'],
    ['oneWeek', 'isOneWeek'],
    ['limitedWear', 'isLimitedWear'],
    ['unlimitedWear', 'isUnlimitedWear'],
    ['refer', 'isRefer'],
  ];

  // handleCheckbox = Checks for event changes in checkbox and updates state
  const handleCheckbox = (event) => {
    for (let [checkbox, isBoxChecked] of checkboxes) {
      if (event.target.type === 'checkbox' && event.target.name === checkbox) {
        isChecked(event, isBoxChecked);
      }
    }
  };

  // handleInput fields
  const handleInput = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  // handleSubmit = Post form data to backend
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //       let res = await fetch('/api/contact', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(state),
  //       });
  //     } catch (error) {
  //       console.log(error)
  //     }
  // };

  const handleReset = () => {
    setState({
      ...state,
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
  };

  // Check state in console
  console.log(state);

  return (
    <Fragment>
      <div id='top'></div>
      <div className='jumbotron row mb-4'>
        <div className='col'>
          <h3 className='cta-heading'>
            Welcome <br /> Dr. Shahid
          </h3>
        </div>
        {/* Image Data */}
        <div className='col'>
          {state.name}
          <br />
          {state.phone}
          <br />
          {state.dateOfBirth}
          <br />
          {state.email}
          <br />
          {state.leg !== '' || state.arm !== '' || state.partialFoot !== ''
            ? `Prothestics: ${state.leg} ${state.arm} ${state.partialFoot} `
            : ''}
          <br />
        </div>
      </div>
      <form id='form'>
        {/* Patient Name */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Patient Name</div>
          <div className='col-10'>
            <input
              type='text'
              className='form-control'
              name='name'
              value={state.name}
              onChange={handleInput}
            />
          </div>
        </div>
        {/* Phone Number */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Phone Number</div>
          <div className='col-10'>
            <input
              type='text'
              className='form-control'
              name='phone'
              onChange={handleInput}
              value={state.phone}
            />
          </div>
        </div>
        {/* Date of Birth */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Date of Birth</div>
          <div className='col-10'>
            <input
              type='text'
              className='form-control'
              name='dateOfBirth'
              onChange={handleInput}
              value={state.dateOfBirth}
            />
          </div>
        </div>
        {/* Email */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Email</div>
          <div className='col-10'>
            <input
              type='email'
              className='form-control'
              name='email'
              onChange={handleInput}
              value={state.email}
            />
          </div>
        </div>
        {/* Area of Concern 
        <div className='row mb-3'>
          <div className='col-2 text-right'>Area of Concern</div>
          <div className='col-10'>
            <div className='form-group'>
              <select className='form-control' id='reasonforvisit'>
                <option>Select Option</option>
                <option>Prosthetics</option>
                <option>Orthotics</option>
                <option>Diabetic Shoes</option>
              </select>
            </div>
          </div>
        </div>
        */}
        {/* Prosthetics */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Prosthetics</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Leg */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='leg'
                  name='leg'
                  onChange={handleCheckbox}
                  value='leg'
                  checked={state.isLeg}
                />
                <label className='form-check-label' htmlFor='leg'>
                  Leg
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Arm */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='arm'
                  name='arm'
                  onChange={handleCheckbox}
                  value='arm'
                  checked={state.isArm}
                />
                <label className='form-check-label' htmlFor='arm'>
                  Arm
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Partial Foot */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='partialFoot'
                  name='partialFoot'
                  onChange={handleCheckbox}
                  value='partial foot'
                  checked={state.isPartialFoot}
                />
                <label className='form-check-label' htmlFor='partialFoot'>
                  Partial Foot
                </label>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className='mx-2 bi bi-plus-circle-fill'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
                  />
                </svg>{' '}
                Add New
              </div>
            </div>
          </div>
        </div>

        {/* Orthotics */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Orthotics</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Back Brace */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='backBrace'
                  name='backBrace'
                  onChange={handleCheckbox}
                  checked={state.isBackBrace}
                  value='back brace'
                />
                <label className='form-check-label' htmlFor='backBrace'>
                  Back Brace
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Knee Brace */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kneeBrace'
                  name='kneeBrace'
                  onChange={handleCheckbox}
                  checked={state.isKneeBrace}
                  value='knee brace'
                />
                <label className='form-check-label' htmlFor='kneeBrace'>
                  Knee Brace
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Ankle Brace */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='ankleBrace'
                  name='ankleBrace'
                  onChange={handleCheckbox}
                  checked={state.isAnkleBrace}
                  value='ankle brace'
                />
                <label className='form-check-label' htmlFor='ankleBrace'>
                  Ankle Brace
                </label>
              </div>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='mx-2 bi bi-plus-circle-fill'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
                />
              </svg>{' '}
              Add New
            </div>
          </div>
        </div>

        {/* Diabetic Shoes */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Diabetic Shoes</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Shoes */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='shoes'
                  name='shoes'
                  onChange={handleCheckbox}
                  checked={state.isShoes}
                  value='shoes'
                />
                <label className='form-check-label' htmlFor='shoes'>
                  Shoes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Inserts */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='inserts'
                  name='inserts'
                  onChange={handleCheckbox}
                  checked={state.isInserts}
                  value='inserts'
                />
                <label className='form-check-label' htmlFor='inserts'>
                  Inserts
                </label>
              </div>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='mx-2 bi bi-plus-circle-fill'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
                />
              </svg>{' '}
              Add New
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Objectives</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Pain */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='pain'
                  name='pain'
                  onChange={handleCheckbox}
                  checked={state.isPain}
                  value='pain'
                />
                <label className='form-check-label' htmlFor='pain'>
                  Pain
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Pressure */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='pressure'
                  name='pressure'
                  onChange={handleCheckbox}
                  checked={state.isPressure}
                  value='pressure'
                />
                <label className='form-check-label' htmlFor='pressure'>
                  Pressure
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Rubbing */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='rubbing'
                  name='rubbing'
                  onChange={handleCheckbox}
                  checked={state.isRubbing}
                  value='rubbing'
                />
                <label className='form-check-label' htmlFor='rubbing'>
                  Rubbing
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Tightness */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='tightness'
                  name='tightness'
                  onChange={handleCheckbox}
                  checked={state.isTightness}
                  value='tightness'
                />
                <label className='form-check-label' htmlFor='tightness'>
                  Tightness
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Looseness */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='looseness'
                  name='looseness'
                  onChange={handleCheckbox}
                  checked={state.isLooseness}
                  value='looseness'
                />
                <label className='form-check-label' htmlFor='looseness'>
                  Looseness
                </label>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className='mx-2 bi bi-plus-circle-fill'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
                  />
                </svg>{' '}
                Add New
              </div>
            </div>
          </div>
        </div>

        {/* Assessment */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Assessment</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Too Tall */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='tooTall'
                  name='tooTall'
                  onChange={handleCheckbox}
                  checked={state.isTooTall}
                  value='too tall'
                />
                <label className='form-check-label' htmlFor='tooTall'>
                  Too Tall
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Too Short */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='tooShort'
                  name='tooShort'
                  onChange={handleCheckbox}
                  checked={state.isTooShort}
                  value='too short'
                />
                <label className='form-check-label' htmlFor='tooShort'>
                  Too Short
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Lateral Shifting */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='lateralShifting'
                  name='lateralShifting'
                  onChange={handleCheckbox}
                  checked={state.isLateralShifting}
                  value='lateral shifting'
                />
                <label className='form-check-label' htmlFor='lateralShifting'>
                  Lateral Shifting
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Medial Shifting */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='medialShifting'
                  name='medialShifting'
                  onChange={handleCheckbox}
                  checked={state.isMedialShifting}
                  value='medial shifting'
                />
                <label className='form-check-label' htmlFor='medialShifting'>
                  Medial Shifting
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* No Toe Clearance */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='noToeClearance'
                  name='noToeClearance'
                  onChange={handleCheckbox}
                  checked={state.isNoToeClearance}
                  value='no toe clearance'
                />
                <label className='form-check-label' htmlFor='noToeClearance'>
                  No Toe Clearance
                </label>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className='mx-2 bi bi-plus-circle-fill'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
                  />
                </svg>{' '}
                Add New
              </div>
            </div>
          </div>
        </div>

        {/* Plan */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Plan</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Issue Resolved */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='issueResolved'
                  name='issueResolved'
                  onChange={handleCheckbox}
                  checked={state.isIssueResolved}
                  value='issue resolved'
                />
                <label className='form-check-label' htmlFor='issueResolved'>
                  Issue Resolved
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* One Week Follow-up */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='oneWeek'
                  name='oneWeek'
                  onChange={handleCheckbox}
                  checked={state.isOneWeek}
                  value='one week'
                />
                <label className='form-check-label' htmlFor='oneWeek'>
                  One Week Follow-up
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Limited Wear Time */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='limitedWear'
                  name='limitedWear'
                  onChange={handleCheckbox}
                  checked={state.isLimitedWear}
                  value='limited wear'
                />
                <label className='form-check-label' htmlFor='limitedWear'>
                  Limited Wear Time
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Unlimited Wear Time */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='unlimitedWear'
                  name='unlimitedWear'
                  onChange={handleCheckbox}
                  checked={state.isUnlimitedWear}
                  value='unlimited wear'
                />
                <label className='form-check-label' htmlFor='unlimitedWear'>
                  Unlimited Wear Time
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Refer To Specialist */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='refer'
                  name='refer'
                  onChange={handleCheckbox}
                  checked={state.isRefer}
                  value='refer'
                />
                <label className='form-check-label' htmlFor='refer'>
                  Refer to Specialist
                </label>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className='mx-2 bi bi-plus-circle-fill'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
                  />
                </svg>{' '}
                Add New
              </div>
            </div>
          </div>
        </div>

        {/* Medical Notation */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Medical Notation</div>
          <div className='col-10'>
            <div className='form-group'>
              <textarea
                className='form-control'
                id='medicalNotation'
                name='medicalNotation'
                onChange={handleInput}
                value={state.medicalNotation}
                rows='3'></textarea>
            </div>
          </div>
        </div>

        {/* Save and Reset button */}
        <div className='row mb-3'>
          <div className='col-2 text-right'></div>
          <div className='col-10'>
            <div className='submit-btn'>
              {/* REMOVE LINK BELOW IN ORDER TO SUBMIT/POST DATA LATER */}
              <Link to='/results'>
                <button
                  className='btn submit-button mr-3'
                  onClick={handleSubmit}>
                  Submit
                </button>
              </Link>
              <input
                className='btn alt-button'
                type='reset'
                value='Reset'
                onClick={handleReset}
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default PatientInfo;
