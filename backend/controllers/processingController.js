const Processing = require('../models/processingModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createProcessing = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const processing = await Processing.create(req.body);

    res.status(201).json({
        success: true,
        processing
    });
});

exports.getProcessing = asyncErrorHandler(async (req, res, next) => {

    const processing = await Processing.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        processing,
    });
});