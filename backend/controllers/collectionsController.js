const Collections = require('../models/collectionsModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createCollections = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const collections = await Collections.create(req.body);

    res.status(201).json({
        success: true,
        collections
    });
});

exports.getCollections = asyncErrorHandler(async (req, res, next) => {

    const collections = await Collections.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        collections,
    });
});