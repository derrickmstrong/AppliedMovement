import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className='jumbotron row jumbo-desktop'>
        <div className='col-4'>
          <h3 className='cta-heading mt-5'>
            Type Less
            <br />
            Do More
          </h3>
          <p className='cta-text'>
            
          </p>
          <button className='btn cta-button'> See video</button>
        </div>
        <div className='col-8'>
          <img
            className='img-fluid'
            src='/assets/am-jumbotron_v2.png'
            alt='Applied Movement'
          />
        </div>
      </div>

      <div className='jumbotron row jumbo-mobile'>
        <div className='col-4'>
          <img
            className='img-fluid'
            src='/assets/am-jumbotron.png'
            alt='Applied Movement'
          />
        </div>
        <div className='col-8'>
          <h3 className='cta-heading mt-5'>
            Type Less
            <br />
            Do More
          </h3>
          <p className='cta-text'>
            {' '}
        
          </p>
          <button className='btn cta-button'> See video</button>
        </div>
      </div>

      <div className='card-deck'>
        <div className='card'>
          <div className='card-body'>
            <p className='text-center'>
              <img
                src='./assets/am-icon_arm.png'
                className='img-fluid am-icon'
              />
            </p>
            <p className='card-text'>
              Orthotics focus on the design and application of externally
              applied assistive devices created to control, guide, limit and/or
              immobilize joints, peripheral appendages and/or body sections.
              They can also be used to prevent injury to said body parts.
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <p className='text-center'>
              <img
                src='./assets/am-icon_leg.png'
                className='img-fluid am-icon'
              />
            </p>
            <p className='card-text'>
              Prostheses are artificial limbs created to aid in a patient's
              mobility after the loss of an extremity due to an accident and/or
              medical condition. These devices have been used for centuries to
              provide users increased mobility after a life-altering event.
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <p className='text-center'>
              <img
                src='./assets/am-icon_hand.png'
                className='img-fluid am-icon'
              />
            </p>
            <p className='card-text'>
              Since its inception, practitioners, assistants, technicians,
              fitters and others affiliated with the Orthotics &amp; Prosthetics
              field have utilized the creation and administration of these
              assistive devices to improve the lives of many worldwide.
            </p>
          </div>
        </div>
      </div>
      <div id='features'></div>
      <div className='d-flex justify-content-center mt-5 px-2'>
        <div className='features-button'>DO MORE, WORK LESS</div>
      </div>

      <div className='features-heading text-center'>FEATURES</div>

      <div className='row row-cols-1 row-cols-md-3 features-cards text-center'>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Real-time Reporting</h5>
              <p className='card-text'>
                See your data created, posted, updated and deleted in real-time.
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Better Patient Tracking</h5>
              <p className='card-text'>
                This feature allows for more secure and concise data collection
                for your patients.
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                Reliable Office-wide Communications
              </h5>
              <p className='card-text'>
                This app will all you to streamline the discussions regarding
                patient needs in order to devote this time to patient care.
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Sociable Data Collection Interface</h5>
              <p className='card-text'>
                This feature will allow for more secure, concise and user
                friendly collection of patient data.
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                Fewer Administrative Typographical Errors
              </h5>
              <p className='card-text'>
                By automating many parts of the data collected on patients, this
                lessens the chance for human error to interrupt the patient's
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Improve Patient Visit Workflows</h5>
              <p className='card-text'>
                Automation will allow reduce the redundancy associated with the
                gathering of patient information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='contact'></div>
      <div className='features-heading text-center my-5'>CONTACT US</div>
      <div className='contact-form'>
        <form className='contact'>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='subject'>Subject</label>
            <select className='form-control' id='subject'>
              <option>Technical</option>
              <option>Comment</option>
              <option>Interested</option>
              <option>Other</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea className='form-control' id='message' rows='3'></textarea>
          </div>
          <button className='btn submit-button'>Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Home;
