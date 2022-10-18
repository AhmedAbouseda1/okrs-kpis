const express = require('express');
const {
    createInfrastructure,
    getInfrastructure,
    updateInfrastructure
} = require('../controllers/infrastructureController');
const {isAuthenticatedUser, authorizeRoles} = require("../middlewares/auth");
const {createCollections, getCollections, updateCollections} = require("../controllers/collectionsController");
const {
    createHumanResources,
    getHumanResources,
    updateHumanResources
} = require("../controllers/humanResourcesController");
const {createProcessing, getProcessing, updateProcessing} = require("../controllers/processingController");
const {createFinance, getFinance, updateFinance} = require("../controllers/financeController");
const {createGeneralAch, getGeneralAch, updateGeneralAch} = require("../controllers/achsetup/general");
const {createCirculationsAch, getCirculationsAch, updateCirculationsAch} = require("../controllers/achsetup/circulation");
const {createActivitesAch, updateActivitesAch, getActivitesAch} = require("../controllers/achsetup/activites");
const {createProcessingAch, getProcessingAch, updateProcessingAch} = require("../controllers/achsetup/processing");
const {createPublicationsAch, getPublicationsAch, updatePublicationsAch} = require("../controllers/achsetup/publications");
const {createTrainingAch, updateTrainingAch, getTrainingAch} = require("../controllers/achsetup/training");
const {createUsersAch, getUsersAch, updateUsersAch} = require("../controllers/achsetup/users");
const {createFinanceAch, getFinanceAch, updateFinanceAch} = require("../controllers/achsetup/finance");

const router = express.Router();

router.route('/library/librarySetup/infrastructure').post(isAuthenticatedUser, createInfrastructure);
router.route('/library/librarySetup/infrastructure/:year/:month').get(isAuthenticatedUser, getInfrastructure);
router.route('/library/librarySetup/infrastructure/:year/:month').put(isAuthenticatedUser, updateInfrastructure);

router.route('/library/librarySetup/collections').post(isAuthenticatedUser, createCollections);
router.route('/library/librarySetup/collections/:year/:month').get(isAuthenticatedUser, getCollections);
router.route('/library/librarySetup/collections/:year/:month').put(isAuthenticatedUser, updateCollections);

router.route('/library/librarySetup/humanResources').post(isAuthenticatedUser, createHumanResources);
router.route('/library/librarySetup/humanResources/:year/:month').get(isAuthenticatedUser, getHumanResources);
router.route('/library/librarySetup/humanResources/:year/:month').put(isAuthenticatedUser, updateHumanResources);

router.route('/library/librarySetup/processing').post(isAuthenticatedUser, createProcessing);
router.route('/library/librarySetup/processing/:year/:month').get(isAuthenticatedUser, getProcessing);
router.route('/library/librarySetup/processing/:year/:month').put(isAuthenticatedUser, updateProcessing);

router.route('/library/librarySetup/finance').post(isAuthenticatedUser, createFinance);
router.route('/library/librarySetup/finance/:year/:month').get(isAuthenticatedUser, getFinance);
router.route('/library/librarySetup/finance/:year/:month').put(isAuthenticatedUser, updateFinance);
///..........
router.route('/library/achievement-setup/GeneralAch').post(isAuthenticatedUser, createGeneralAch);
router.route('/library/achievement-setup/GeneralAch/:year/:month').get(isAuthenticatedUser, getGeneralAch);
router.route('/library/achievement-setup/GeneralAch/:year/:month').put(isAuthenticatedUser, updateGeneralAch);

router.route('/library/achievement-setup/CirculationsAch').post(isAuthenticatedUser, createCirculationsAch);
router.route('/library/achievement-setup/CirculationsAch/:year/:month').get(isAuthenticatedUser, getCirculationsAch);
router.route('/library/achievement-setup/CirculationsAch/:year/:month').put(isAuthenticatedUser, updateCirculationsAch);

router.route('/library/achievement-setup/FinanceAch').post(isAuthenticatedUser, createFinanceAch);
router.route('/library/achievement-setup/FinanceAch/:year/:month').get(isAuthenticatedUser, getFinanceAch);
router.route('/library/achievement-setup/FinanceAch/:year/:month').put(isAuthenticatedUser, updateFinanceAch);

router.route('/library/achievement-setup/ActivitesAch').post(isAuthenticatedUser, createActivitesAch);
router.route('/library/achievement-setup/ActivitesAch/:year/:month').get(isAuthenticatedUser, getActivitesAch);
router.route('/library/achievement-setup/ActivitesAch/:year/:month').put(isAuthenticatedUser, updateActivitesAch);

router.route('/library/achievement-setup/ProcessingAch').post(isAuthenticatedUser, createProcessingAch);
router.route('/library/achievement-setup/ProcessingAch/:year/:month').get(isAuthenticatedUser, getProcessingAch);
router.route('/library/achievement-setup/ProcessingAch/:year/:month').put(isAuthenticatedUser, updateProcessingAch);

router.route('/library/achievement-setup/PublicationsAch').post(isAuthenticatedUser, createPublicationsAch);
router.route('/library/achievement-setup/PublicationsAch/:year/:month').get(isAuthenticatedUser, getPublicationsAch);
router.route('/library/achievement-setup/PublicationsAch/:year/:month').put(isAuthenticatedUser, updatePublicationsAch);

router.route('/library/achievement-setup/TrainingAch').post(isAuthenticatedUser, createTrainingAch);
router.route('/library/achievement-setup/TrainingAch/:year/:month').get(isAuthenticatedUser, getTrainingAch);
router.route('/library/achievement-setup/TrainingAch/:year/:month').put(isAuthenticatedUser, updateTrainingAch);

router.route('/library/achievement-setup/UsersAch').post(isAuthenticatedUser, createUsersAch);
router.route('/library/achievement-setup/UsersAch/:year/:month').get(isAuthenticatedUser, getUsersAch);
router.route('/library/achievement-setup/UsersAch/:year/:month').put(isAuthenticatedUser, updateUsersAch);
module.exports = router;