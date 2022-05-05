const express=require("express");

const app=express();
const hairController=require("./controllers/hair.controllers");
const mackuppController=require("./controllers/mackupp.controller");


const cors=require("cors");
app.use(cors());

 app.use(express.json());

 app.use("/hair",hairController)
 app.use("/mackupp",mackuppController)


 module.exports=app;