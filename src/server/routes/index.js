import * as express from 'express';
import patientInfoRouter from './patientinfo';
const router = express.Router();
import bcrypt from 'bcrypt'
// import orm from 'orm'

import {sendContactMessage} from '../utils/messages'

router.use('/patientinfo', patientInfoRouter);

router.get('/secret', (req, res) => {
    // res.json(req.user);
    res.send('Hello World!')
  });

  router.post('/login', async (req,res)=>{
    console.log('Data from controller', req.body)
    try {

    } catch(err) {
      console.log(err)
    }
    orm.get('users',{email:req.body.email},(err, users)=>{
        if(err){
            res.json({error:err}).status(401)
        }
        if(users.length < 1){
            // no such user
            res.status(401);

        }
        console.log(user)
        let user = users[0];
        // verify pw
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(err){
                res.status(401);
            }
            //todo JWT or session
            res.status(200).json({
                token: jwt.sign({id:user.id, email:user.email},secret, {expiresIn: '2h'}),
                email: user.email,
                id:user.id
            })
        })
    })
   
})


  router.post('/contact', async (req, res, next) => {
    // let  {userEmail, subject, text} = req.body;
     let message = req.body
     console.log('Message from controller', message);
     try {
       let sendMessage = await sendContactMessage(message);
        sendMessage ? res.status(200).json({success:true,message:"message sent!"}) : res.status(400).json({success:false,message:"error sending message!"})
     } catch(err) {
       console.log(err)
     }
   })



export default router;
