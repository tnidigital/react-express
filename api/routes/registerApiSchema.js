var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserInfo=new Schema({
    firstName: String,
    lastName: String,
    email: String
});

var userInformation=mongoose.model('userInfor',UserInfo);
module.exports=userInformation;