const asyncErrorHandler = require('../../middlewares/asyncErrorHandler');
const ErrorHandler = require('../../utils/errorHandler');

exports.createProcessingAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const processing= await ProcessingAch.create(req.body);

    res.status(201).json({
        success: true,
        processing
    });
});


// updateCollections
exports.updateProcessingAch = asyncErrorHandler(async (req, res, next) => {
    let processing = await ProcessingAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!processing) {
        return next(new ErrorHandler("processing Not Found", 404));
    }

    res.status(200).json({
        success: true,
        processing
    });
});

exports.getProcessingAch = asyncErrorHandler(async (req, res, next) => {

    const processing = await ProcessingAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        processing,
    });
});