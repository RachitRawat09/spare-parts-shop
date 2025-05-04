const express = require('express');
const router = express.Router();
const {getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct} = require('../controllers/productController');

// get all products
router.route('/',).get(getAllProducts);

// create a new product
router.route('/').post(createProduct)

// get a single product
router.route('/:id').get(getProduct)

// update an Element 
router.route('/:id').put(updateProduct)

// delete an element 
router.route('/:id').delete(deleteProduct)

// get producr of a specific category
// router.get('/category')

module.exports = router;






