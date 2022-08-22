const Infrastructure = require('../models/infrastructureModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createInfrastructure = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const infrastructure = await Infrastructure.create(req.body);

    res.status(201).json({
        success: true,
        infrastructure
    });
});


exports.createInfrastructure = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const infrastructure = await Infrastructure.create(req.body);

    res.status(201).json({
        success: true,
        infrastructure
    });
});