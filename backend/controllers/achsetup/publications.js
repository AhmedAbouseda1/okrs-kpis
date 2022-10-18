const asyncErrorHandler = require('../../middlewares/asyncErrorHandler');
const ErrorHandler = require('../../utils/errorHandler');

exports.createPublicationsAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const publication = await PublicationsAch.create(req.body);

    res.status(201).json({
        success: true,
        publication
    });
});


// updateCollections
exports.updatePublicationsAch = asyncErrorHandler(async (req, res, next) => {
    let publication = await PublicationsAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!publication) {
        return next(new ErrorHandler("publication Not Found", 404));
    }

    res.status(200).json({
        success: true,
        publication
    });
});

exports.getPublicationsAch = asyncErrorHandler(async (req, res, next) => {

    const publication = await PublicationsAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        publication,
    });
});