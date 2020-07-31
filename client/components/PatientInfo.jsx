import React, { Fragment } from 'react';

const PatientInfo = () => {

  return (
    <Fragment>
      <div className='jumbotron row mb-4'>
        <div className='first col'>
          <h3 className='cta-heading'>Type Less, Do More</h3>
          <p className='cta-text'> Text here</p>
          <button className='btn cta-button'> See video</button>
        </div>
        <div className='second col'>IMAGE</div>
      </div>

      <form>
        {/* Patient Name */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Patient Name</div>
          <div className='col-10'>
            <input type='text' className='form-control' name='name' />
          </div>
        </div>

        {/* Phone Number */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Phone Number</div>
          <div className='col-10'>
            <input type='text' className='form-control' name='phone' />
          </div>
        </div>

        {/* Date of Birth */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Date of Birth</div>
          <div className='col-10'>
            <input type='text' className='form-control' name='dateofbirth' />
          </div>
        </div>

        {/* Email */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Email</div>
          <div className='col-10'>
            <input type='email' className='form-control' name='email' />
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
                  value='Leg'
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
                  value='Arm'
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
                  value='partial-foot'
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
                  value='back-brace'
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
                  value='knee-brace'
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
                  value='ankle-brace'
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
                  value='shoes'
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
                  value='inserts'
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
                  value='pain'
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
                  value='pressure'
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
                  value='rubbing'
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
                  value='tightness'
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
                  value='looseness'
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
                  value='too-tall'
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
                  value='too-short'
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
                  value='lateral-shifting'
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
                  value='medial-shifting'
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
                  value='no-toe-clearance'
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
                  value='issue-resolved'
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
                  value='one-week-follow-up'
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
                  value='limited-wear-time'
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
                  value='unlimited-wear-time'
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
                  value='refer-to-specialist'
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
                id='medicalnotation'
                name='medicalnotation'
                rows='3'></textarea>
            </div>
          </div>
        </div>

        {/* Save and Reset button */}
        <div className='row mb-3'>
          <div className='col-2 text-right'></div>
          <div className='col-10'>
            <div className='submit-btn'>
              <input
                className='btn btn-primary mr-3'
                type='submit'
                value='Submit'
              />{' '}
              <input className='btn btn-primary' type='reset' value='Reset' />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default PatientInfo;
