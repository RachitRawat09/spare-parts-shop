const express=require('express');
const cors=require('cors');
const errorHandler=require('express-async-handler');
const connectDB = require('./config/dbConnection');
const auth=require("./routes/auth.js");
const products=require('./routes/productRoutes')

const app = express();


const dotenv = require('dotenv').config();

const port=  5050;

// mongodb connection 
connectDB();

app.use(cors());

// middleware 
app.use(express.json());
app.use('/api/products',products)
app.use("/api",auth);//authentication
app.use(errorHandler)


app.listen(port , ()=>{
  console.log(`Server is running on ${port}`)
})



