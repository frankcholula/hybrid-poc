import axios from 'axios'

const API_URL = '/api/patients/'

const createPatient = async (patientData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, patientData, config)
    return response.data
}

const getPatients = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL,config)
    return response.data
}

const deletePatient = async (ID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete(API_URL + ID, config)
    return response.data
}

const patientService = {
    createPatient,
    getPatients,
    deletePatient
}

export default patientService
