const Patient = require('../models/patientModel')
const User = require('../models/userModel')

const asyncHandler = require('express-async-handler')
// @descr   Get patients
// @route   GET /api/patients
// @access  Private
const getPatients = asyncHandler(async (req, res) => {
    const patients = await Patient.find({user: req.user.id})
    res.status(200).json(patients)
})

// @descr   Create patient
// @route   POST /api/patients
// @access  Private
const createPatient = asyncHandler(async (req, res) => {
    if(!req.body.ID){
        res.status(400)
        throw new Error('Please add an id field.')
    } else if (!req.body.patname) {
        res.status(400)
        throw new Error('Please add the name field.')
    }
    const patient = await Patient.create({
        user: req.user.id,
        ID: req.body.ID,
        patname: req.body.patname
    })
    res.status(200).json(patient)
})

// @descr   Update patient name
// @route   PUT /api/patients/:ID
// @access  Private
const updatePatientName = asyncHandler(async (req, res) => {
    filter = {ID: req.params.ID}
    update = {patname: req.body.patname}
    const patient = await Patient.findOne(filter)
    if (!patient) {
        res.status(400)
        throw new Error('Patient not found.')
    } else if (!req.body.patname) {
        res.status(400)
        throw new Error ('Please enter new name')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error("User not found")
    }
    // Make sure the logged in user matches the patients user
    if (patient.user.toString() != req.user.id) {
        res.status(401)
        throw new Error("User not Authorized") 
    }
    const updatedPatient = await Patient.findOneAndUpdate(
        filter, update, {
            new: true
        })
    res.status(200).json(updatedPatient)
})

// @descr   Delete patient
// @route   DELETE /api/patients/:ID
// @access  Private
const deletePatient = asyncHandler(async (req, res) => {
    filter = {ID: req.params.ID}
    const patient = await Patient.findOne(filter)
    if (!patient) {
        res.status(400)
        throw new Error('Patient not found.')
    }
    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error("User not found")
    }
    // Make sure the logged in user matches the patients user
    if (patient.user.toString() != req.user.id) {
        res.status(401)
        throw new Error("User not Authorized") 
    }
    await Patient.findOneAndRemove(filter)
    res.status(200).json({ID: req.params.ID})
})

module.exports = {
    getPatients,
    createPatient,
    updatePatientName,
    deletePatient
}