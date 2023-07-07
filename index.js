const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require ('dotenv')
dotenv.config()

const{DB_MONGODB,}=process.env;
// Connection MongoDB

const database = module.exports = () => {
    const connectionParams = {
        useNewParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(DB_MONGODB);
        console.log("Connect to mongodb");
    } catch (error){
        console.log(error);
        console.log("failed");
    }
};
// async function connect(){
//     try {
//         await mongoose.connect(url);
//         console.log("Connect to mongodb");

//     } catch (error){
//         console.error(error);
//     }
// }

database();

app.listen(2023,()=>{
    console.log("Server started on port 2023")
});