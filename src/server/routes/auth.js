import * as express from "express";
import * as db from "../db/connection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

const secret = "aser7874"

router.post('/login', (req,res)=>{
    orm.get('users',{email:req.body.email},(err, users)=>{
        if(err){
            res.json({error:err}).status(401)
        }
        if(users.length < 1){
            // no such user
            res.status(401);
        }
        let user = users[0];
        // verify pw
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(err){
                res.status(401);
            }
            //todo JWT or session
            res.json({
                token: jwt.sign({id:user.id, email:user.email},secret, {expiresIn: '2h'}),
                email: user.email,
                id:user.id
            })
        })

        
    })
   
})

router.post('/register', (req, res) => {
    // hash password
    let password = bcrypt.hash(req.body.password, 8, (hashErr, hash)=>{
        orm.insert('users',{email:req.body.email, password:hash}, (sqlErr, result)=>{
            if(sqlErr){
                console.log(sqlErr);
                res.status(500)
            }
            res.json({
                registration: 'ok'
            })
        });
    })
    
})

router.get('/secret', auth, (req, res)=>{
    
    res.json(req.user)
})

// router.get('/contact', async (req, res) => {
//     let message =  req.body
// })

function auth(req, res, next){
    const auth = req.headers.authorization;
    if(auth){
        token = auth.substring("Baerer ".length);
        console.log(token)
        jwt.verify(token, secret, (err, user)=>{
            if(err){
                res.status(401).end()
            }
            if(user){
                req.user = user;
            }
            
        })
    } else {
        res.status(401).end()
    }
    next()
}

//  //using Twilio SendGrid's v3 Node.js Library
//  //https://github.com/sendgrid/sendgrid-nodejs
//  const sgMail = require('@sendgrid/mail');
//  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//  const msg = {
//    to: 'errondial@gmail.com',
//    from: 'test@example.com',
//    subject: 'Sending with Twilio SendGrid is Fun',
//    text: 'and easy to do anywhere, even with Node.js',
//    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//  };
//  sgMail.send(msg);


export default router