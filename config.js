require("dotenv").config()
const mongoose = require('mongoose');
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connection = mongoose.connect('mongodb+srv://petromax:petromax@cluster0.t2puiw0.mongodb.net/?retryWrites=true&w=majority',connectionparams);

module.exports=connection;