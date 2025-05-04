const express=require('express');
const errorHandler=require('express-async-handler');
const connectDB = require('./config/dbConnection');
const auth=require("./routes/auth.js");

const app = express();

const dotenv = require('dotenv').config();

const port=process.env.PORT || 5001;

// mongodb connection 
connectDB();

// middleware 
app.use(express.json());
app.use('/api/products',require('./routes/productRoutes'))
app.use("/api",auth);//authentication
app.use(errorHandler)

app.listen(port , ()=>{
  console.log(`Server is running on ${port}`)
})



