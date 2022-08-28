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


exports.getInfrastructure = asyncErrorHandler(async (req, res, next) => {
    const infrastructure = await Infrastructure.findOne({
       year: req.params.year,
       month: req.params.month,
    });

    res.status(200).json({
        success: true,
        infrastructure,
    });
});