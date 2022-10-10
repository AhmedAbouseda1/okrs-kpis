const mongoose = require('mongoose');

const processingSchema = new mongoose.Schema({
    NumberOfDocumentDigitizedInTheReportingYear: {
        type: Number,
        required: [true, "Please Enter Number Of Document Digitized In The Reporting Year"],
    },
    OwnerInstitutionsAcademicPublicationInTheInstitutionalRepository: {
        type: Number,
        required: [true, "Please Enter Owner Institution's Academic Publication In The Institutional Repository"],
    },
    RareMaterialsAccessibleViaWebCatalogues: {
        type: Number,
        required: [true, "Please Enter Rare Materials Accessible Via Web Catalogues"],
    },
    LibraryVisits: {
        type: Number,
        required: [true, "Please Enter Library Visits"]
    },
    TargetPopulationReached: {
        type: Number,
        required: [true, "Please Enter Target Population Reached"]
    },
    TheNumberOfMediaAcquiredInACertainPeriod: {
        type: Number,
        required: [true, "Please Enter The Number Of Media Acquired In A Certain Period"]
    },
    NumberOfAttendancesAtLibraryInstructionalSessions: {
            type: Number,
            required: [true, "Please Enter Number Of Attendances At Library Instructional Sessions"]
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

module.exports = mongoose.model('General', generalSchema);