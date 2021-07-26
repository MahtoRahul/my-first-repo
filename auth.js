const dotenv = require("dotenv");
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: false,
    useFindAndModify: false
    
 }).then( () => {
    console.log("connection successful");
 }).catch( (err) => console.log("no connection"));