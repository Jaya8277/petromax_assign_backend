require("dotenv").config()

const express = require('express')

// const mongoose = require('mongoose');
const connection = require("./config");
const app = express();
const adminpanel = require('./model/adminpanel');

const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());      

app.get("/", (req,res)=> {
    res.send("Home Page of admin");
})
  
app.get("/content",async(req,res)=> {
   try{
  
    let data1 =await adminpanel.findOne()
    // adminpanel.findOne({_id:id})
    console.log(data1);
    return res.status(201).send({"data":data1})
} catch (error) {
    console.log(error)
    return res.status(401).send("some error occured ")
}
})


app.post("/content/create",async(req,res)=>{
    try {
        const {       topright,
            topleft,
            topleft1,
            bottomleft,
            bottomRight,
            bottomRight1,
            facebook,
            instagram,
            linkedin,
            twitter,
google
        }= req.body

    

        const articles=await adminpanel.create({
            topright,
            topleft,
            topleft1,
            bottomleft,
            bottomRight,
            bottomRight1,
            facebook,
            instagram,
            linkedin,
            twitter,
google
        })
      
        return res.status(201).send("Content Created Successfully")
        
    } catch (error) {
        return res.status(401).send("some error occured ")
    }
    })
 

app.put("/content/update/:id",async(req,res)=>{
    const {topleft,topleft1,topright,bottomleft,bottomRight,bottomRight1,facebook,instagram,linkedin,twitter,google}= req.body
    const id = req.params.id
  
    console.log(id)
     console.log("updateeee");
     console.log(req.body)
     
   let updatedData= await adminpanel.updateOne({id},{
        topright,
        topleft,
        topleft1,
        bottomleft,
        bottomRight,
        bottomRight1,
        facebook,
        instagram,
        linkedin,
        twitter,
        google
        
        
    })

    console.log(updatedData)
    return res.status(200).send("updated success")
})


const PORT = process.env.PORT || 8080

app.listen(PORT, (connection)=>  {
    try{
        connection
        console.log("database connect")
    }catch(err){
        console.log(err)
    }
    console.log("successfully server running on 8080");
})