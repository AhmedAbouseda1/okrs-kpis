const asyncErrorHandler = require('../../middlewares/asyncErrorHandler');
const ErrorHandler = require('../../utils/errorHandler');

exports.createFinanceAch  = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const finance = await FinanceAch.create(req.body);

    res.status(201).json({
        success: true,
        finance
    });
});


// updateCollections
exports.updateFinanceAch  = asyncErrorHandler(async (req, res, next) => {
    let finance = await FinanceAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!finance) {
        return next(new ErrorHandler("finance Not Found", 404));
    }

    res.status(200).json({
        success: true,
        finance
    });
});

exports.getFinanceAch = asyncErrorHandler(async (req, res, next) => {

    const finance = await FinanceAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        finance,
    });
});