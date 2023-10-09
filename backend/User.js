const mongoose=require('mongoose')

const {Schema}= mongoose;

const UserSchema=new Schema({
    name:{
        type:String,
        reuried:true
    },
    location:{
        type:String,
        reuried:true
    },
    email:{
        type:String,
        reuried:true
    },
    password:{
        type:String,
        reuried:true
    },
    date:{
        type:Date,
        default:Date.now
    },

});
 module.exports=mongoose.model('user',UserSchema)