import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';

const cors = require('cors');
const sgMail = require('@sendgrid/mail');

// TODO: Figure out how to make this work so that we don't leave out API open
// require('dotenv').config({ path: __dirname + './.env' });

const app = express();


let publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(express.static(publicPath));
app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});


// SendGrid API
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// TODO: Setup Post route - Note: Move to own file in Routes later (see patientinfo.js) and import into Routes/index.js
app.post('/contact', (req, res) => {
  // Add API KEY
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


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
