const asyncHandler=require('express-async-handler');
const Product = require('../models/Product');


// get all products 
const getAllProducts=asyncHandler(async (req, res) => {
     const Products=await Product.find();
     res.status(200).json(Products);
})

// get particular product 
const getProduct=asyncHandler(async (req,res)=>{
    const {id}=req.params;
    try {
        const product=await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// create new product 
const createProduct=asyncHandler(async(req,res)=>{
    const {name,description,price,brand,category}=req.body;
    if(!name || !description || !price || !brand || !category){
        return res.status(400).json({message:"Please fill all fields"})
    }
    try {
        const product=await Product.create({
            name,
            description,
            price,
            brand,
            category
        })
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// update a product
const updateProduct = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    try{
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        const updateProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200).json(updateProduct);
        
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
    
})

// delete a product
const deleteProduct=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    try{
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Product deleted successfully"}); 
    }
    catch(error){
        res.status(400).json({message:error.message})
    }

})

module.exports={
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}