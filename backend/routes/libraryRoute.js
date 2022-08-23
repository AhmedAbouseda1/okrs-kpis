const express = require('express');
const {createInfrastructure, getInfrastructure} =  require('../controllers/infrastructureController');
const {isAuthenticatedUser, authorizeRoles} = require("../middlewares/auth");
const {createCollections, getCollections} = require("../controllers/collectionsController");
// const { getAllProducts, getProductDetails, updateProduct, deleteProduct, getProductReviews, deleteReview, createProductReview, createProduct, getAdminProducts, getProducts } = require('../controllers/productController');

const router = express.Router();

router.route('/library/librarySetup/infrastructure').post(isAuthenticatedUser, createInfrastructure);
router.route('/library/librarySetup/collections').post(isAuthenticatedUser, createCollections);

router.route('/library/librarySetup/infrastructure/:year/:month').get(getInfrastructure);
router.route('/library/librarySetup/infrastructure/:year/:month').get(getCollections);

module.exports = router;