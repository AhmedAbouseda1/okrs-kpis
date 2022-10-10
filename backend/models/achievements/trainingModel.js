const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    Scientificprograms: {
        type: Number,
        required: [true, "Please Enter Scientific programs"],
    },
    HR: {
        type: Number,
        required: [true, "Please Enter HR"],
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

module.exports = mongoose.model('Training', trainingSchema);