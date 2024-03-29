const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    firstname:{
        type: String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    }, 
    email:{
        type:String,
        require:true,
    },
    password:{
        type: String, 
        require:true,
    },
    token:{
        type:String,
        default:null,
    }
})

module.exports= mongoose.model("User", UserSchema);