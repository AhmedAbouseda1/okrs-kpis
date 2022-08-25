const Finance = require('../models/financeModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');

exports.createFinance = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const finance = await Finance.create(req.body);

    res.status(201).json({
        success: true,
        finance
    });
});

exports.getFinance = asyncErrorHandler(async (req, res, next) => {

    const finance = await Finance.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        finance,
    });
});