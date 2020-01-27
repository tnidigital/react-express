
var express= require('express');
var router= express.Router();
var User=require('./registerApiSchema');
var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/userdb');
console.log("mongo connected")
router.post('/',function(req, res){
    console.log("post called")
    User.findOne({email: req.body.email})
    .then(user=>{
        if(user){
            console.log(user)
            return res.status(400).json({email: "email already exists"})
        }else{
            console.log("else condition")
            var user=new User(req.body)
            user.save(function(err,result){
                res.send(result);
              });
        }
    })
});

module.exports=router;

