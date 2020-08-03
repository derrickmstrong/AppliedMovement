const router = require("express").Router();
const {orm} = require("../db/connection");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

function auth(req, res, next){
    const auth = req.headers.authorization;
    if(auth){
        token = auth.substring("Baerer ".length);
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


module.exports = router;