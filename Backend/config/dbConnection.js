const mongoose = require('mongoose');


const connectDB=async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log(`MongoDB connected successfully `);
    }
    catch(err){
        console.log(`${err.message}`);
        process.exit(1); // Exit process with failure
    }
}
module.exports=connectDB;