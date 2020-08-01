import React, { useState, Fragment } from 'react';

const PatientInfo = () => {
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
    isPartialFoot: false,
    isBackBrace: false,
    isKneeBrace: false,
    isAnkleBrace: false,
    isShoes: false,
    isInserts: false,
    isPain: false,
    isPressure: false,
    isRubbing: false,
    isTightness: false,
    isLooseness: false,
    isTooTall: false,
    isTooShort: false,
    isLateralShifting: false,
    isMedialShifting: false,
    isNoToeClearance: false,
    isIssueResolved: false,
    isOneWeek: false,
    isLimitedWear: false,
    isUnlimitedWear: false,
    isRefer: false,
  });

  const [isLeg, setIsLeg] = useState(null);
  const [isArm, setIsArm] = useState(null);

  const isLegChecked = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.checked);
    setIsLeg(!isLeg);
    if (isLeg) {
      setState({
        ...state,
        [e.target.name]: '',
      });
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  const isArmChecked = (e) => {
    setIsArm(!isArm);
    if (isArm) {
      setState({
        ...state,
        [e.target.name]: '',
      });
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.type === 'checkbox' && e.target.name === 'leg') {
      isLegChecked(e);
    } else if (e.target.type === 'checkbox' && e.target.name === 'arm') {
      isArmChecked(e);
    } else {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
    }
  };

  console.log(state);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Waiting on Route Info from Backend

    // let res = await fetch("/api/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ name, phone, ... }),
    //     });
  };

  return (
    <Fragment>
      <div className='jumbotron row mb-4'>
        <div className='first col'>
          <h3 className='cta-heading'>Type Less, Do More</h3>
          <p className='cta-text'> Text here</p>
          <button className='btn cta-button'> See video</button>
        </div>
        <div className='second col'>
          {state.name}
          <br />
          {state.phone}
          <br />
          {state.dateOfBirth}
          <br />
          {state.leg}
          <br />
          {state.arm}
          <br />
        </div>
      </div>

      <form>
        {/* Patient Name */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Patient Name</div>
          <div className='col-10'>
            <input
              type='text'
              className='form-control'
              name='name'
              value={state.name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='leg'
                  name='leg'
                  onChange={handleChange}
                  value='leg'
                  checked={state.isLeg}
                />
                <label className='form-check-label' htmlFor='leg'>
                  Leg
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='arm'
                  name='arm'
                  onChange={handleChange}
                  value='arm'
                  checked={state.isArm}
                />
                <label className='form-check-label' htmlFor='arm'>
                  Arm
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='partial-foot'
                  name='partial-foot'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.partialFoot}
                />
                <label className='form-check-label' htmlFor='partial-foot'>
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
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='back-brace'
                  name='back-brace'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.backBrace}
                />
                <label className='form-check-label' htmlFor='back-brace'>
                  Back Brace
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='knee-brace'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.kneeBrace}
                />
                <label className='form-check-label' htmlFor='knee-brace'>
                  Knee Brace
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='ankle-brace'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.ankleBrace}
                />
                <label className='form-check-label' htmlFor='ankle-brace'>
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
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='shoes'
                  name='shoes'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.shoes}
                />
                <label className='form-check-label' htmlFor='shoes'>
                  Shoes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='inserts'
                  name='inserts'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.inserts}
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
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='pain'
                  name='pain'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.pain}
                />
                <label className='form-check-label' htmlFor='pain'>
                  Pain
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='pressure'
                  name='pressure'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.pressure}
                />
                <label className='form-check-label' htmlFor='pressure'>
                  Pressure
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='rubbing'
                  name='rubbing'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.rubbing}
                />
                <label className='form-check-label' htmlFor='rubbing'>
                  Rubbing
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox4'
                  name='tightness'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.tightness}
                />
                <label className='form-check-label' htmlFor='tightness'>
                  Tightness
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='looseness'
                  name='looseness'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.looseness}
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
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='too-tall'
                  name='too-tall'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.tooTall}
                />
                <label className='form-check-label' htmlFor='too-tall'>
                  Too Tall
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='too-short'
                  name='too-short'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.tooShort}
                />
                <label className='form-check-label' htmlFor='too-short'>
                  Too Short
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='lateral-shifting'
                  name='lateral-shifting'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.lateralShifting}
                />
                <label className='form-check-label' htmlFor='lateral-shifting'>
                  Lateral Shifting
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='medial-shifting'
                  name='medial-shifting'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.medialShifting}
                />
                <label className='form-check-label' htmlFor='medial-shifting'>
                  Medial Shifting
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='no-toe-clearance'
                  name='no-toe-clearance'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.noToeClearance}
                />
                <label className='form-check-label' htmlFor='no-toe-clearance'>
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
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='issue-resolved'
                  name='issue-resolved'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.issueResolved}
                />
                <label className='form-check-label' htmlFor='issue-resolved'>
                  Issue Resolved
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='one-week-follow-up'
                  name='one-week-follow-up'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.oneWeek}
                />
                <label
                  className='form-check-label'
                  htmlFor='one-week-follow-up'>
                  One Week Follow-up
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='limited-wear-time'
                  name='limited-wear-time'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.limitedWear}
                />
                <label className='form-check-label' htmlFor='limited-wear-time'>
                  Limited Wear Time
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='unlimited-wear-time'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.unlimitedWear}
                />
                <label
                  className='form-check-label'
                  htmlFor='unlimited-wear-time'>
                  Unlimited Wear Time
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='refer-to-specialist'
                  name='refer-to-specialist'
                  onChange={handleChange}
                  checked={state.isChecked}
                  value={state.refer}
                />
                <label
                  className='form-check-label'
                  htmlFor='refer-to-specialist'>
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
                id='medical_notation'
                name='medical_notation'
                onChange={handleChange}
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
              <button className='btn btn-primary mr-3' onClick={handleSubmit}>
                Submit
              </button>
              <input className='btn btn-primary' type='reset' value='Reset' />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default PatientInfo;
