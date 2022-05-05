const express=require("express");

const Hair=require("../models/hair.models");

const router=express.Router();

router.get("",async (req,res)=>{
try {
    const hair=await Hair.find().lean().exec();
    return res.status(200).send(hair);
} catch (error) {
    return res.status(501).send({message:error.message})
}
})

// router.get("/:id",async (req,res)=>{
//     try {
//         const women=await Women.findById(req.params.id).lean().exec();
//         return res.status(200).send(women);
//     } catch (error) {
//         return res.status(501).send({message:error.message})
//     }
//     })
module.exports= router;