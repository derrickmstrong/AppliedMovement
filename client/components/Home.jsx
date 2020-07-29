import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className='jumbotron row'>
        <div className='first col'>
          <h3 className='cta-heading'>Type Less, Do More</h3>
          <p className='cta-text'> Text here</p>
          <button className='btn cta-button'> See video</button>
        </div>
        <div className='second col'>IMAGE</div>
      </div>

      <div className='card-deck'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div id='features'></div>
      <div className='d-flex justify-content-center mt-5 px-2'>
        <div className='features-button'>DO MORE, WORK LESS</div>
      </div>

      <div className='features-heading text-center'>PRODUCT FEATURES</div>

      <div className='row row-cols-1 row-cols-md-3 features-cards text-center'>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
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
            <label for='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-group'>
            <label for='subject'>Subject</label>
            <select className='form-control' id='subject'>
              <option>Technical</option>
              <option>Comment</option>
              <option>Interested</option>
              <option>Other</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='message'>Message</label>
            <textarea className='form-control' id='message' rows='3'></textarea>
          </div>
          <button className='btn submit-button'>Submit</button>
        </form>
      </div>
    
    </Fragment>
  );
};

export default Home;
