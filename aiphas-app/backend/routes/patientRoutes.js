const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {
    getPatients,
    createPatient,
    updatePatientName,
    deletePatient} = require('../controllers/patientController')

router.route('/').get(protect, getPatients).post(protect, createPatient)
router.route('/:ID').put(protect, updatePatientName).delete(protect, deletePatient)

module.exports = router