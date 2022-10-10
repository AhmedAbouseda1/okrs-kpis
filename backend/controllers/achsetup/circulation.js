const Collections = require('../models/achievements/circulationsModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createCirculationsAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const circulation = await CirculationsAch.create(req.body);

    res.status(201).json({
        success: true,
        circulation
    });
});


// updateCollections
exports.updateCirculationsAch = asyncErrorHandler(async (req, res, next) => {
    let circulation = await CirculationsAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!circulation) {
        return next(new ErrorHandler("circulations Not Found", 404));
    }

    res.status(200).json({
        success: true,
        circulation
    });
});

exports.getCirculationsAch = asyncErrorHandler(async (req, res, next) => {

    const circulation = await CirculationsAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        circulation,
    });
});