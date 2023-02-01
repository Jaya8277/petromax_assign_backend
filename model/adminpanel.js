const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({

    // username: {String,default:},
    // post: {String,default:},   
    topleft:{type:String,default:"We Bring Your Ideas To Life"},
    topleft1:{type:String,default:"Monotonectally customize e-business infrastructures throught performance based technology. Intrinsicly fabricate resource sucking interfaces after intuitive networks"},
    topright:{type:String,default:"./image3.PNG"},
    bottomleft:{type:String,default:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"},
    bottomRight:{type:String,default:"We are Profesional and Talented"},
    bottomRight1:{type:String,default:"Monotonectally customize e-business infrastructures throught performance based technology. Intrinsicly fabricate resource sucking interfaces after intuitive networks"},
    facebook:{type:String,default:"https://www.facebook.com/"},
    instagram:{type:String,default:"https://www.linkedin.com/"},
    linkedin:{type:String,default:"https://www.instagram.com/"} ,
    twitter:  {type:String,default:"https://twitter.com/"},
    google:  {type:String,default:"https://google.com/"},
    

   
})
module.exports= mongoose.model("admindata", AdminSchema);