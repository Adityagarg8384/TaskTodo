const mongoose= require("mongoose");


const dbconnect=()=>{
    mongoose.connect("mongodb+srv://adityagarg8384:jUcNuo7Hk86gESyO@cluster0.ebuj9ks.mongodb.net/")
    .then(()=>{
        console.log("Connection has been made successfully");
    })
    .catch((err)=>{
        console.log("Some error has occurred");
        console.log(err);
        process.exit(1);
    })
}

module.exports= dbconnect;
