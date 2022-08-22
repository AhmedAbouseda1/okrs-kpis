const express = require('express');
// const { getAllProducts, getProductDetails, updateProduct, deleteProduct, getProductReviews, deleteReview, createProductReview, createProduct, getAdminProducts, getProducts } = require('../controllers/productController');
// const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const {createInfrastructure} =  require('../controllers/infrastructureController');
const {isAuthenticatedUser, authorizeRoles} = require("../middlewares/auth");
const {myOrders, newOrder} = require("../controllers/orderController");
const {createProduct} = require("../controllers/productController");
const {createCollections} = require("../controllers/collectionsController");
// const { getAllProducts, getProductDetails, updateProduct, deleteProduct, getProductReviews, deleteReview, createProductReview, createProduct, getAdminProducts, getProducts } = require('../controllers/productController');

const router = express.Router();

router.route('/library/librarySetup/infrastructure').post(isAuthenticatedUser, createInfrastructure);
router.route('/library/librarySetup/collections').post(isAuthenticatedUser, createCollections);


module.exports = router;