
const mongoose=require("mongoose");

const mackuppSchema=new mongoose.Schema({
    image_url: {type:String},
    image2_url: {type:String},
    brandname: {type:String},
    productName: {type:String},
    price: {type:Number},
    available: {type:String},
    background: {type:String},
},
{
versionKey:false,
timeStamps:true,
})
const mackuppdata=mongoose.model("mackupp",mackuppSchema);
module.exports=mackuppdata;