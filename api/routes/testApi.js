var express= require('express');
var router= express.Router();
var mongoose= require('mongoose');
var User=require('./registerApiSchema');


// to read complete data
router.get('/', function(req,res) {
   mongoose.connect("mongodb://localhost:27017/userdb");
   console.log("connected");
   User.find({}, function(err, result){
     if(err){
       res.json(err);
     }else{
       res.json(result);
     }
   })
  
});

module.exports=router;



// mongoose.connect("mongodb://localhost:27017/userdb");


// router.get('/', function(req,res) {
  
//   User.findOne({email: req.body.email})
//   .then(user=>{
//       if(user){
//           console.log(user)
//          res.json(user)
//       }
//     })
//  // var email=req.body.email;
// // User.findById({email:req.body.email}, function(err, result){
// //     if(err){
// //       res.json(err);
// //     }else{
// //       res.json(result);
// //       console.log(result)
// //     }
// //   })  
//  // res.send('email'+ req.query.email);
// });

