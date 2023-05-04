const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ID: {
        type: String,
        required: [true, 'Please add a patient id'],
        unique: true,
    },
    patname: {
        type: String,
        required: [true, 'Please add a patient name']
    },
    birthday: {
        type: Number,
    },
    checktime: {
        type: Date,
    },
    allergicMed: {
        type: Array,
    },
    anticoagMed: {
        type: Array,
    },
    hospitalized: {
        type: Array,
    },
    operation: {
        type: Array,
    },
    med: {
        type: Array,
    },
    lab: {
        type: Array,
    }
}, {timestamps: true})

module.exports = mongoose.model('Patient', patientSchema)