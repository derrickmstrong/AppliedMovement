import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const PatientInfo = (props) => {
  // const history = useHistory();

  // Setup state for all form elements, toggles
  const [state, setState] = useState({
    name: '',
    phone: '',
    dateOfBirth: '',
    email: '',
    aboveTheKnee: '',
    belowTheKnee: '',
    arm: '',
    partialFoot: '',
    backBrace: '',
    kneeBrace: '',
    ankleBrace: '',
    shoes: '',
    inserts: '',
    shoesInserts: '',
    pain: '',
    pressure: '',
    rubbing: '',
    tightness: '',
    looseness: '',
    blister: '',
    callusing: '',
    openSore: '',
    redness: '',
    ulcer: '',
    tooTall: '',
    tooShort: '',
    lateralShifting: '',
    medialShifting: '',
    noToeClearance: '',
    tooTight: '',
    chaffing: '',
    pistoning: '',
    increasedVolume: '',
    decreasedVolume: '',
    rotating: '',
    issueResolved: '',
    oneWeek: '',
    limitedWear: '',
    unlimitedWear: '',
    refer: '',
    medicalNotation: '',
  });

  const handleCheckbox = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.value : name;
    // Toggle/setState individual checkbox value
    if (event.target.checked) {
      setState({
        ...state,
        [name]: value,
      });
    } else {
      setState({
        ...state,
        [name]: '',
      });
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  // const handleSubmit = async (event) => {
  // event.preventDefault();
  // try {
  //     let res = await fetch('/api/patientinfo', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(state),
  //     });
  //     if (res.ok) {
  //       history.push('/api/results');
  //     } else {
  //       console.log('Something went wrong');
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // From Backend
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('/api/patientinfo', {
  //     method: 'POST',
  //     body: JSON.stringify(state),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((f) => f.json())
  //     .then((result) => {
  //       props.history.push('/details?id=' + result.id);
  //       console.log('id', result);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const handleReset = () => {
    setState({
      ...state,
      name: '',
      phone: '',
      dateOfBirth: '',
      email: '',
      aboveTheKnee: '',
      belowTheKnee: '',
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
        <div className='col-5'>
          <div className='cta-heading'>Patient Info</div>
          {state.name !== '' ? `Patient Name: ${state.name} ` : ''} <br />
          {state.dateOfBirth !== '' ? `D.O.B: ${state.dateOfBirth} ` : ''}
          <br />
          {state.phone !== '' ? `Phone: ${state.phone} ` : ''}
          <br />
          {state.email !== '' ? `Email: ${state.email} ` : ''}
          <br />
        </div>
        {/*  Patient Data */}
        <div className='col-7 patient-data'>
          {/*<img src='./assets/am-clipboard.png' className='am-clipboard' />*/}
          <h3>Summary</h3>
          {state.aboveTheKnee !== '' ||
          state.belowTheKnee !== '' ||
          state.arm !== '' ||
          state.partialFoot !== ''
            ? `Prothestics: ${state.aboveTheKnee} ${state.belowTheKnee} ${state.arm} ${state.partialFoot} `
            : ''}
          <br />
          <br />
          {state.backBrace !== '' ||
          state.kneeBrace !== '' ||
          state.ankleBrace !== ''
            ? `Orthotics: ${state.backBrace} ${state.kneeBrace} ${state.ankleBrace} `
            : ''}
          <br />
          <br />
          {state.shoes !== '' ||
          state.inserts !== '' ||
          state.shoesInserts !== ''
            ? `Diabetics Shoes: ${state.shoes} ${state.inserts} ${state.shoesInserts} `
            : ''}
          <br />
          <br />
          {state.pain !== '' ||
          state.pressure !== '' ||
          state.rubbing !== '' ||
          state.tightness !== '' ||
          state.looseness !== '' ||
          state.blister !== '' ||
          state.callusing !== '' ||
          state.openSore !== '' ||
          state.redness !== '' ||
          state.ulcer !== ''
            ? `Patient Concern(s): ${state.pain} ${state.pressure} ${state.rubbing} ${state.tightness} ${state.looseness} ${state.blister} ${state.callusing} ${state.openSore} ${state.redness} ${state.ulcer} `
            : ''}
          <br />
          <br />
          {state.tooTall !== '' ||
          state.tooShort !== '' ||
          state.lateralShifting !== '' ||
          state.medialShifting !== '' ||
          state.noToeClearance !== '' ||
          state.tooTight !== '' ||
          state.chaffing !== '' ||
          state.pistoning !== '' ||
          state.increasedVolume !== '' ||
          state.decreasedVolume !== '' ||
          state.rotating !== ''
            ? `Assessment: ${state.tooTall} ${state.tooShort} ${state.lateralShifting} ${state.medialShifting} ${state.noToeClearance} ${state.tooTight} ${state.chaffing} ${state.pistoning} ${state.increasedVolume} ${state.decreasedVolume} ${state.rotating} `
            : ''}
          <br />
          <br />
          {state.issueResolved !== '' ||
          state.oneWeek !== '' ||
          state.limitedWear !== '' ||
          state.unlimitedWear !== '' ||
          state.refer !== ''
            ? `Plan: ${state.issueResolved} ${state.oneWeek} ${state.limitedWear} ${state.unlimitedWear} ${state.refer} `
            : ''}
          <br />
          <br />
          {state.medicalNotation !== ''
            ? `Medical Notation: ${state.medicalNotation} `
            : ''}
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
              required
            />
          </div>
        </div>
        {/* Date of Birth */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Date of Birth</div>
          <div className='col-10'>
            <input
              type='date'
              className='form-control'
              name='dateOfBirth'
              onChange={handleInput}
              value={state.dateOfBirth}
              required
            />
          </div>
        </div>
        {/* Phone Number */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Phone Number</div>
          <div className='col-10'>
            <input
              type='tel'
              pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
              placeholder='205-911-2020'
              className='form-control'
              name='phone'
              onChange={handleInput}
              value={state.phone}
              required
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
              required
            />
          </div>
        </div>
        {/* Prosthetics */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Prosthetics</div>
          <div className='col-10'>
            <div className='form-group form-check'>
              <div className='form-check form-check-inline'>
                {/* Above the Knee */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='aboveTheKnee'
                  name='aboveTheKnee'
                  onChange={handleCheckbox}
                  value='above the knee'
                  checked={state.isAboveTheKnee}
                />
                <label className='form-check-label' htmlFor='aboveTheKnee'>
                  Above The Knee
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Below The Knee */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='belowTheKnee'
                  name='belowTheKnee'
                  onChange={handleCheckbox}
                  value='below the knee'
                  checked={state.isBelowTheKnee}
                />
                <label className='form-check-label' htmlFor='below the knee'>
                  Below The Knee
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
                {/* <svg
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
               </svg>
                Add New */}
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

              <div className='form-check form-check-inline'>
                {/* Shoes and Inserts */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='shoesInserts'
                  name='shoesInserts'
                  onChange={handleCheckbox}
                  checked={state.isShoesInserts}
                  value='shoes + inserts'
                />
                <label className='form-check-label' htmlFor='shoesInserts'>
                  Shoes + Inserts
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Concern(s) */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Patient Concern(s)</div>
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
              </div>
              <div className='form-check form-check-inline'>
                {/* Blister */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='blister'
                  name='blister'
                  onChange={handleCheckbox}
                  checked={state.isBlister}
                  value='blister'
                />
                <label className='form-check-label' htmlFor='blister'>
                  Blister
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Callusing */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='callusing'
                  name='callusing'
                  onChange={handleCheckbox}
                  checked={state.isCallusing}
                  value='callusing'
                />
                <label className='form-check-label' htmlFor='callusing'>
                  Callusing
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Open Sore */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='openSore'
                  name='openSore'
                  onChange={handleCheckbox}
                  checked={state.isOpenSore}
                  value='open sore'
                />
                <label className='form-check-label' htmlFor='openSore'>
                  Open Sore
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Redness */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='redness'
                  name='redness'
                  onChange={handleCheckbox}
                  checked={state.isRedness}
                  value='redness'
                />
                <label className='form-check-label' htmlFor='redness'>
                  Redness
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Ulcer */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='ulcer'
                  name='ulcer'
                  onChange={handleCheckbox}
                  checked={state.isUlcer}
                  value='ulcer'
                />
                <label className='form-check-label' htmlFor='ulcer'>
                  Ulcer
                </label>
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
              </div>
              <div className='form-check form-check-inline'>
                {/* Too Tight */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='tooTight'
                  name='tooTight'
                  onChange={handleCheckbox}
                  checked={state.isTooTight}
                  value='too tight'
                />
                <label className='form-check-label' htmlFor='tooTight'>
                  Too Tight
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Chaffing */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='chaffing'
                  name='chaffing'
                  onChange={handleCheckbox}
                  checked={state.isChaffing}
                  value='chaffing'
                />
                <label className='form-check-label' htmlFor='chaffing'>
                  Chaffing
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Pistoning */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='pistoning'
                  name='pistoning'
                  onChange={handleCheckbox}
                  checked={state.isPistoning}
                  value='pistoning'
                />
                <label className='form-check-label' htmlFor='pistoning'>
                  Pistoning
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Increased Volume */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='increasedVolume'
                  name='increasedVolume'
                  onChange={handleCheckbox}
                  checked={state.isIncreasedVolume}
                  value='increased volume'
                />
                <label className='form-check-label' htmlFor='InceasedVolume'>
                  Increased Volume
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/*Decreased Volume */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='decreasedVolume'
                  name='decreasedVolume'
                  onChange={handleCheckbox}
                  checked={state.isDecreasedVolume}
                  value='decreased volume'
                />
                <label className='form-check-label' htmlFor='decreasedVolume'>
                  Decreased Volume
                </label>
              </div>
              <div className='form-check form-check-inline'>
                {/* Rotating */}
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='rotating'
                  name='rotating'
                  onChange={handleCheckbox}
                  checked={state.isRotating}
                  value='rotating'
                />
                <label className='form-check-label' htmlFor='rotating'>
                  Rotating
                </label>
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
                <button className='btn submit-button mr-3'>Submit</button>
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
