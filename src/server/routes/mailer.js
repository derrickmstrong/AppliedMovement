// FIXME: Route isn't working, currently run in server.js
import * as express from 'express';
const sgMail = require('@sendgrid/mail');

const router = express.Router();

// TODO: Figure out how to make this work so that we don't leave out API open
// require('dotenv').config({ path: __dirname + './.env' });

// SendGrid API
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// TODO: Setup Post route - Note: Move to own file in Routes later (see patientinfo.js) and import into Routes/index.js
router.post('/contact', (req, res) => {
  // Add API KEY
  //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
  sgMail.setApiKey('');
  // Setup req.body
  const { email, subject, message } = req.body;
  // Create msg
  const msg = {
    to: 'derrickmstrong@gmail.com',
    from: 'clearmarketinganddesign@gmail.com',
    subject: `NEW Contact: ${subject} via AM`,
    text: `
    From: ${email} 
    Message: ${message}
    `,
  };
  // Send mail
  sgMail
    .send(msg)
    // THEN create Promise to check for success and catch on failure
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log('Err:', err);
      res.status(401).json({
        success: false,
      });
    });
});

export default router;