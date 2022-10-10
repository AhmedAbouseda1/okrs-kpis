const Collections = require('../models/achievements/activitesModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createActivitesAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const activite = await ActivitesAch.create(req.body);

    res.status(201).json({
        success: true,
        user
    });
});


// updateCollections
exports.updateActivitesAch = asyncErrorHandler(async (req, res, next) => {
    let activite = await ActivitesAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!activite) {
        return next(new ErrorHandler("activite Not Found", 404));
    }

    res.status(200).json({
        success: true,
        activite
    });
});

exports.getActivitesAch = asyncErrorHandler(async (req, res, next) => {

    const activite = await ActivitesAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        activite,
    });
});