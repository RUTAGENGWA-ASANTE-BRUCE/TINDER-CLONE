import Express from "express";
import Mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors"


//App config
const app=Express()
const port=process.env.PORT || 8001
const connection_url = "mongodb://localhost/tinder-clone"
//Middlewares
app.use(Express.json())
app.use(Cors())
//db config
Mongoose.connect(connection_url)

//API endpoints
app.get("/",(req,res)=> res.status(200).send("Hello World"))
app.post("/tinder/cards",(req,res)=>{
    const dbCard=req.body

    Cards.create(dbCard,(err,data)=>{
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if (err) {
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
//listener
app.listen(port,()=>console.log(`Listening on localhost: ${port}`))