const express=require("express");

const Mackupp=require("../models/mackupp.model");

const router=express.Router();

router.get("",async (req,res)=>{
try {
    const mackupp=await Mackupp.find().lean().exec();
    return res.status(200).send(mackupp);
} catch (error) {
    return res.status(501).send({message:error.message})
}
})

// router.get("/:id",async (req,res)=>{
//     try {
//         const men=await Men.findById(req.params.id).lean().exec();
//         return res.status(200).send(men);
//     } catch (error) {
//         return res.status(501).send({message:error.message})
//     }
//     })
module.exports= router;