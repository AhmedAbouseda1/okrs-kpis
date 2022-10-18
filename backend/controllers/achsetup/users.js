const asyncErrorHandler = require('../../middlewares/asyncErrorHandler');
const ErrorHandler = require('../../utils/errorHandler');

exports.createUsersAch = asyncErrorHandler(async (req, res, next) => {

    req.body.user = req.user.id;
    const user = await UsersAch.create(req.body);

    res.status(201).json({
        success: true,
        user
    });
});


// updateCollections
exports.updateUsersAch = asyncErrorHandler(async (req, res, next) => {
    let user = await UsersAch.findOneAndUpdate({
        year: req.params.year,
        month: req.params.month,
    }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!user) {
        return next(new ErrorHandler("user Not Found", 404));
    }

    res.status(200).json({
        success: true,
        user
    });
});

exports.getUsersAch = asyncErrorHandler(async (req, res, next) => {

    const user = await UsersAch.findOne({
        year: req.params.year,
        month: req.params.month,
    });

    res.status(200).json({
        success: true,
        user,
    });
});