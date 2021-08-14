const express  = require("express");
const apiRouter = require("./routes/api");
const mongoose = require("mongoose");
require('dotenv').config();


const app = express();

app.use("/api", apiRouter);



mongoose.connect(process.env.DB_CONNECTION,{useCreateIndex:true, useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log(`DB connected...${process.env.DB_CONNECTION}`);
}).catch((e)=>{
    console.log(`Error while connecting databass ${e}`);
})


app.listen(3000, () =>{
    console.log(`listening to port ${3000}`);
});



//https://github.com/maitraysuthar/rest-api-nodejs-mongodb/blob/master/controllers/BookController.js
//https://github.com/zowe/sample-node-api/blob/master/src/routes/cars.route.js