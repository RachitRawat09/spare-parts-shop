
const mongoose = require("mongoose")
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"]
    },
    description :{
        type:String,
        required:[true,"Please add a description"]
    },
    price:{
        type:Number,
        required:[true,"Please add a price"]
    },
    brand:{
        type:String,
        required:[true,"Please add a brand"]
    },  
    category:{
        type:String,
        required:[true,"Please add a category"]
    },

})

module.exports=mongoose.model("Product",productSchema)