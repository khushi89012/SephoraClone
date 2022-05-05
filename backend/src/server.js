const app=require("./index");

const connect=require("./configs/db");

app.listen(4700,async()=>{
    try {
        await connect();
        console.log("listening on port 4700")
    } catch (error) {
        console.log({message:error.message})
    }
})