const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect(`mongodb+srv://${env.SECRET_KEY}@cluster0.yswkt.mongodb.net/sephoraproject`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Database connected");
        }).catch((err)=>{
            console.log(err);
        }
        );
}
