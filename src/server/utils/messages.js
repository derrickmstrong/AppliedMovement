const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const {generateContactEmail} = require('../email-templates/templates')

//repace send_api_key with key from .env file
const options = {
    auth:{
        api_key:process.env.SENDGRID_API_KEY
    }
};

let mailer = nodemailer.createTransport(sendgridTransport(options));

exports.sendContactMessage = async (message) => {
    console.log('Message from message utility', message)
     let messageSent;
    try {
        let emailMessage = await generateContactEmail(message);
        console.log('Generated email', emailMessage)
        let sendMessage = await mailer.sendMail(emailMessage, (err, res) => {
            if (err) return console.log(err)
            return true
        })
        console.log(sendMessage)
        return messageSent = true
    } catch (err) {
        console.info(err);
    }

}
