const mongoose = require('mongoose');

const infrastructureSchema = new mongoose.Schema({
    squaredMetersOfBuildings: {
        type: Number,
        required: [true, "Please Enter Squared Meters Of Buildings"],
    },
    squaredMetersAvailableForPublic: {
        type: Number,
        required: [true, "Please Enter Squared Meters Available For Public"],
    },
    readingHallsSeats: {
        type: Number,
        required: [true, "Please Enter readingHallsSeats"]
    },
    readingHallsTables: {
        type: Number,
        required: [true, "Please Enter readingHallsTables"],
    },
    activitiesHallsTables: {
        type: Number,
        required: [true, "Please Enter activitiesHallsTables"]
    },
    activitiesHallsSeats: {
        type: Number,
        required: [true, "Please Enter activitiesHallsSeats"],
    },
    noOfPc: {
        type: Number,
        required: [true, "Please Enter noOfPc"],
    },
    createdAt: {
        type: Date,
        default:
        Date.now,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
});

// infrastructureSchema.pre("save", async function (next) {
//
//     if (!this.isModified("password")) {
//         next();
//     }
//
//     this.password = await bcrypt.hash(this.password, 10);
// });
//
// infrastructureSchema.methods.getJWTToken = function () {
//     return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRE
//     });
// }
//
// infrastructureSchema.methods.comparePassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// }
//
// infrastructureSchema.methods.getResetPasswordToken = async function () {
//
//     // generate token
//     const resetToken = crypto.randomBytes(20).toString("hex");
//
//     // generate hash token and add to db
//     this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
//     this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
//
//     return resetToken;
// }

module.exports = mongoose.model('Infrastructure', infrastructureSchema);