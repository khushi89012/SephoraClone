const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://pappu:pappu123@cluster0.yswkt.mongodb.net/sephoraproject");
}
