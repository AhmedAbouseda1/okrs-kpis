const ErrorHandler = require('../../utils/errorHandler');
const asyncErrorHandler = require('../../middlewares/asyncErrorHandler');

exports.createTrainingAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const train = await TrainingAch.create(req.body);

    res.status(201).json({
        success: true,
        train
    });
});


// updateCollections
exports.updateTrainingAch = asyncErrorHandler(async (req, res, next) => {
    let train = await TrainingAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!train) {
        return next(new ErrorHandler("train Not Found", 404));
    }

    res.status(200).json({
        success: true,
        train
    });
});

exports.getTrainingAch = asyncErrorHandler(async (req, res, next) => {

    const train = await TrainingAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        train,
    });
});