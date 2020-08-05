// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');


// const options = {
//     auth:{
//         api_key: process.env.SENDGRID_API_KEY
//     }
// };

// let mailer = nodemailer.createTransport(sendgridTransport(options));

// exports.sendContactMail = async (message) => {
//     //const {email, subject, message} = message;
//     let messageSent;
//     try {
//         let emailMessage = await generateContactEmail(message)
//     } catch (err) {
//         console.info(err);
//     }

// }