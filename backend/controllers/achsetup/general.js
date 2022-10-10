const Collections = require('../models/achievements/generalModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createGeneralAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const general = await GeneralAch.create(req.body);

    res.status(201).json({
        success: true,
        general
    });
});


// updateCollections
exports.updateGeneralAch = asyncErrorHandler(async (req, res, next) => {
    let general = await GeneralAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!general) {
        return next(new ErrorHandler("general Not Found", 404));
    }

    res.status(200).json({
        success: true,
        general
    });
});

exports.getGeneralAch = asyncErrorHandler(async (req, res, next) => {

    const general = await GeneralAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        general,
    });
});