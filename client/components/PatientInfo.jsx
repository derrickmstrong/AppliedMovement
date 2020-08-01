import React, { useState, Fragment } from 'react';

const PatientInfo = () => {
  const [isCheckedLeg, setIsCheckedLeg] = useState(false)
  const [isCheckedArm, setIsCheckedArm] = useState(false)
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [dateOfBirth, setDateOfBirth] = useState('')
const [email, setEmail] = useState('')
const [leg, setLeg] = useState('')
const [arm, setArm] = useState('')
const [partialFoot, setPartialFoot] = useState('')
const [backBrace, setBackBrace] = useState('')
const [kneeBrace, setKneeBrace] = useState('')
const [ankleBrace, setAnkleBrace] = useState('')
const [shoes, setShoes] = useState('')
const [inserts, setInserts] = useState('')
const [pain, setPain] = useState('')
const [pressure, setPressure] = useState('')
const [rubbing, setRubbing] = useState('')
const [tightness, setTightness] = useState('')
const [looseness, setLooseness] = useState('')
const [tooTall, setTooTall] = useState('')
const [tooShort, setTooShort] = useState('')
const [lateralShifting, setLateralShifting] = useState('')
const [medialShifting, setMedialShifting] = useState('')
const [noToeClearance, setNoToeClearance] = useState('')
const [issueResolved, setIssueResolved] = useState('')
const [oneWeek, setOneWeek] = useState('')
const [limitedWear, setLimitedWear] = useState('')
const [unlimitedWear, setUnlimitedWear] = useState('')
const [refer, setRefer] = useState('')
const [medicalNotation, setMedicalNotation] = useState('')


const handleNameChange = (e) => {
setName(e.target.value)
}

const handlePhoneChange = (e) => {
setPhone(e.target.value)
}

const handleEmailChange = (e) => {
setEmail(e.target.value)
}

const handleDOBChange = (e) => {
setDateOfBirth(e.target.value)
}

const handleLegChange = (e) => {
  setIsCheckedLeg(!isCheckedLeg)
  if (isCheckedLeg) {
    setLeg('')
  } else {
    setLeg(e.target.value)
  }
}

const handleArmChange = (e) => {
setIsCheckedArm(!isCheckedArm)
  if (isCheckedArm) {
    setArm('')
  } else {
    setArm(e.target.value)
  }
}

const handlePartialFootChange = (e) => {
setPartialFoot(e.target.value)
}

const handleBackBraceChange = (e) => {
setBackBrace(e.target.value)
}

const handleKneeBraceChange = (e) => {
setKneeBrace(e.target.value)
}

const handleAnkleBraceChange = (e) => {
setAnkleBrace(e.target.value)
}

const handleShoesChange = (e) => {
setShoes(e.target.value)
}

const handleInsertsChange = (e) => {
setInserts(e.target.value)
}

const handlePainChange = (e) => {
setPain(e.target.value)
}

const handlePressureChange = (e) => {
setPressure(e.target.value)
}

const handleRubbingChange = (e) => {
setRubbing(e.target.value)
}

const handleTightnessChange = (e) => {
setTightness(e.target.value)
}

const handleLoosenessChange = (e) => {
setLooseness(e.target.value)
}

const handleTooTallChange = (e) => {
setTooTall(e.target.value)
}

const handleTooShortChange = (e) => {
setTooShort(e.target.value)
}

const handleLateralShiftingChange = (e) => {
setLateralShifting(e.target.value)
}

const handleMedialShiftingChange = (e) => {
setMedialShifting(e.target.value)
}

const handleNoToeClearanceChange = (e) => {
setNoToeClearance(e.target.value)
}

const handleIssueResolvedChange = (e) => {
setIssueResolved(e.target.value)
}

const handleOneWeekChange = (e) => {
setOneWeek(e.target.value)
}

const handleLimitedWearChange = (e) => {
setLimitedWear(e.target.value)
}

const handleUnlimitedWearChange = (e) => {
setUnlimitedWear(e.target.value)
}

const handleReferChange = (e) => {
setRefer(e.target.value)
}

const handleMedicalNotationChange = (e) => {
setMedicalNotation(e.target.value)
}

const handleSubmit = (e) => {
e.preventDefault()

// Waiting on Route Info from Backend

// let res = await fetch("/api/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, phone, ... }),
//     });

}


  return (
    <Fragment>
      <div className='jumbotron row mb-4'>
        <div className='first col'>
          <h3 className='cta-heading'>Type Less, Do More</h3>
          <p className='cta-text'> Text here</p>
          <button className='btn cta-button'> See video</button>
        </div>
        <div className='second col'>
          {name} 
          <br /> 
          {leg} 
          <br /> 
          {arm}
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
              value={name}
              onChange={handleNameChange}
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
              onChange={handlePhoneChange}
              value={phone}
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
              name='dateofbirth'
              onChange={handleDOBChange}
              value={dateOfBirth}
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
              onChange={handleEmailChange}
              value={email}
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
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='leg'
                  name='leg'
                  onChange={handleLegChange}
                  value='leg'
                  checked={isCheckedLeg}
                />
                <label class='form-check-label' for='leg'>
                  Leg
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='arm'
                  name='arm'
                  onChange={handleArmChange}
                  value='arm'
                  checked={isCheckedArm}
                />
                <label class='form-check-label' for='arm'>
                  Arm
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='partial-foot'
                  name='partial-foot'
                  onChange={handlePartialFootChange}
                  value={partialFoot}
                />
                <label class='form-check-label' for='partial-foot'>
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
                    fill-rule='evenodd'
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
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='back-brace'
                  name='back-brace'
                  onChange={handleBackBraceChange}
                  value={backBrace}
                />
                <label class='form-check-label' for='back-brace'>
                  Back Brace
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='knee-brace'
                  onChange={handleKneeBraceChange}
                  value={kneeBrace}
                />
                <label class='form-check-label' for='knee-brace'>
                  Knee Brace
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='ankle-brace'
                  onChange={handleAnkleBraceChange}
                  value={ankleBrace}
                />
                <label class='form-check-label' for='ankle-brace'>
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
                  fill-rule='evenodd'
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
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='shoes'
                  name='shoes'
                  onChange={handleShoesChange}
                  value={shoes}
                />
                <label class='form-check-label' for='shoes'>
                  Shoes
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inserts'
                  name='inserts'
                  onChange={handleInsertsChange}
                  value={inserts}
                />
                <label class='form-check-label' for='inserts'>
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
                  fill-rule='evenodd'
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
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='pain'
                  name='pain'
                  onChange={handlePainChange}
                  value={pain}
                />
                <label class='form-check-label' for='pain'>
                  Pain
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='pressure'
                  name='pressure'
                  onChange={handlePressureChange}
                  value={pressure}
                />
                <label class='form-check-label' for='pressure'>
                  Pressure
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='rubbing'
                  name='rubbing'
                  onChange={handleRubbingChange}
                  value={rubbing}
                />
                <label class='form-check-label' for='rubbing'>
                  Rubbing
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox4'
                  name='tightness'
                  onChange={handleTightnessChange}
                  value={tightness}
                />
                <label class='form-check-label' for='tightness'>
                  Tightness
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='looseness'
                  name='looseness'
                  onChange={handleLoosenessChange}
                  value={looseness}
                />
                <label class='form-check-label' for='looseness'>
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
                    fill-rule='evenodd'
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
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='too-tall'
                  name='too-tall'
                  onChange={handleTooTallChange}
                  value={tooTall}
                />
                <label class='form-check-label' for='too-tall'>
                  Too Tall
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='too-short'
                  name='too-short'
                  onChange={handleTooShortChange}
                  value={tooShort}
                />
                <label class='form-check-label' for='too-short'>
                  Too Short
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='lateral-shifting'
                  name='lateral-shifting'
                  onChange={handleLateralShiftingChange}
                  value={lateralShifting}
                />
                <label class='form-check-label' for='lateral-shifting'>
                  Lateral Shifting
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='medial-shifting'
                  name='medial-shifting'
                  onChange={handleMedialShiftingChange}
                  value={medialShifting}
                />
                <label class='form-check-label' for='medial-shifting'>
                  Medial Shifting
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='no-toe-clearance'
                  name='no-toe-clearance'
                  onChange={handleNoToeClearanceChange}
                  value={noToeClearance}
                />
                <label class='form-check-label' for='no-toe-clearance'>
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
                    fill-rule='evenodd'
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
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='issue-resolved'
                  name='issue-resolved'
                  onChange={handleIssueResolvedChange}
                  value={issueResolved}
                />
                <label class='form-check-label' for='issue-resolved'>
                  Issue Resolved
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='one-week-follow-up'
                  name='one-week-follow-up'
                  onChange={handleOneWeekChange}
                  value={oneWeek}
                />
                <label class='form-check-label' for='one-week-follow-up'>
                  One Week Follow-up
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='limited-wear-time'
                  name='limited-wear-time'
                  onChange={handleLimitedWearChange}
                  value={limitedWear}
                />
                <label class='form-check-label' for='limited-wear-time'>
                  Limited Wear Time
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='unlimited-wear-time'
                  onChange={handleUnlimitedWearChange}
                  value={unlimitedWear}
                />
                <label class='form-check-label' for='unlimited-wear-time'>
                  Unlimited Wear Time
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='refer-to-specialist'
                  name='refer-to-specialist'
                  onChange={handleReferChange}
                  value={refer}
                />
                <label class='form-check-label' for='refer-to-specialist'>
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
                    fill-rule='evenodd'
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
            <div class='form-group'>
              <textarea
                class='form-control'
                id='medical_notation'
                name='medical_notation'
                onChange={handleMedicalNotationChange}
                value={medicalNotation}
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
