const express = require('express');
const {createInfrastructure, getInfrastructure} =  require('../controllers/infrastructureController');
const {isAuthenticatedUser, authorizeRoles} = require("../middlewares/auth");
const {createCollections, getCollections} = require("../controllers/collectionsController");
const {createHumanResources, getHumanResources} = require("../controllers/humanResourcesController");
const {createProcessing, getProcessing} = require("../controllers/processingController");
const {createFinance, getFinance} = require("../controllers/financeController");

const router = express.Router();

router.route('/library/librarySetup/infrastructure').post(isAuthenticatedUser, createInfrastructure);
router.route('/library/librarySetup/infrastructure/:year/:month').get(isAuthenticatedUser, getInfrastructure);

router.route('/library/librarySetup/collections').post(isAuthenticatedUser, createCollections);
router.route('/library/librarySetup/collections/:year/:month').get(isAuthenticatedUser, getCollections);

router.route('/library/librarySetup/humanResources').post(isAuthenticatedUser, createHumanResources);
router.route('/library/librarySetup/humanResources/:year/:month').get(isAuthenticatedUser, getHumanResources);

router.route('/library/librarySetup/processing').post(isAuthenticatedUser, createProcessing);
router.route('/library/librarySetup/processing/:year/:month').get(isAuthenticatedUser, getProcessing);

router.route('/library/librarySetup/finance').post(isAuthenticatedUser, createFinance);
router.route('/library/librarySetup/finance/:year/:month').get(isAuthenticatedUser, getFinance);

module.exports = router;