const mongoose= require("mongoose");

const fileschema= new mongoose.Schema({
    userid:{
        type:String,
        require:true,
    },
    id:{
        type: Number,
        require: true
    },
    task:{
        type: String,
        require: true,
    },
    setreminder:{
        type: String,
    },
    date:{
        type: Date,
        require: true,
        expires: 0*60,
    }
})

const File= mongoose.model("File", fileschema);
module.exports= File;