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
            <input type='text' className='form-control' />
          </div>
        </div>
        
        {/* Phone Number */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Phone Number</div>
          <div className='col-10'>
            <input type='text' className='form-control' />
          </div>
        </div>
        
        {/* Date of Birth */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Date of Birth</div>
          <div className='col-10'>
            <input type='text' className='form-control' />
          </div>
        </div>
        
        {/* Email */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Email</div>
          <div className='col-10'>
            <input type='email' className='form-control' />
          </div>
        </div>
        
        {/* Area of Concern */}
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
        
        {/* Prosthetics */}
        <div className='row mb-3'>
          <div className='col-2 text-right'>Prosthetics</div>
          <div className='col-10'>
            <div class='form-group form-check'>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineCheckbox1'>
                  Leg
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox2'
                  value='option2'
                />
                <label class='form-check-label' for='inlineCheckbox2'>
                  Arm
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox3'
                  value='option3'
                />
                <label class='form-check-label' for='inlineCheckbox3'>
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
                  id='inlineCheckbox1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineCheckbox1'>
                  Back Brace
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox2'
                  value='option2'
                />
                <label class='form-check-label' for='inlineCheckbox2'>
                  Knee Brace
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox3'
                  value='option3'
                />
                <label class='form-check-label' for='inlineCheckbox3'>
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
                  id='inlineCheckbox1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineCheckbox1'>
                  Shoes
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox2'
                  value='option2'
                />
                <label class='form-check-label' for='inlineCheckbox2'>
                  Inserts
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox3'
                  value='option3'
                />
                <label class='form-check-label' for='inlineCheckbox3'>
                  Both
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
                  id='inlineCheckbox1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineCheckbox1'>
                  Pain
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox2'
                  value='option2'
                />
                <label class='form-check-label' for='inlineCheckbox2'>
                  Pressure
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox3'
                  value='option3'
                />
                <label class='form-check-label' for='inlineCheckbox3'>
                  Rubbing
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox4'
                  value='option4'
                />
                <label class='form-check-label' for='inlineCheckbox4'>
                  Tightness
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox5'
                  value='option5'
                />
                <label class='form-check-label' for='inlineCheckbox5'>
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
                    id='inlineCheckbox1'
                    value='option1'
                  />
                  <label class='form-check-label' for='inlineCheckbox1'>
                    Too Tall
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineCheckbox2'>
                    Too Short
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label class='form-check-label' for='inlineCheckbox3'>
                    Lateral Shifting
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox4'
                    value='option4'
                  />
                  <label class='form-check-label' for='inlineCheckbox4'>
                    Medial Shifting
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox5'
                    value='option5'
                  />
                  <label class='form-check-label' for='inlineCheckbox5'>
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

        </form>
    </Fragment>
  );
};

export default PatientInfo;
