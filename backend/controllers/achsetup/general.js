const asyncErrorHandler = require('../../middlewares/asyncErrorHandler');
const ErrorHandler = require('../../utils/errorHandler');
const General = require('../../models/achievements/generalModel');

exports.createGeneralAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const general = await General.create(req.body);

    res.status(201).json({
        success: true,
        general
    });
});


// updateCollections
exports.updateGeneralAch = asyncErrorHandler(async (req, res, next) => {
    let general = await General.findOneAndUpdate({
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

    const general = await General.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        general,
    });
});