import * as express from "express";
import * as db from "../db/connection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

const secret = "aser7874"



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



export default router