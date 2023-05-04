import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import patientService from './patientService'

const initialState = {
    patients: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new patient
export const createPatient = createAsyncThunk('patients/create',
    async(patientData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await patientService.createPatient(patientData, token)
        } catch (error) {
            const message =
                (error.response &&
                 error.response.data &&
                 error.response.data.message) ||
                 error.message ||
                 error.ToString()
            return thunkAPI.rejectWithValue(message)
        }
})

// get new patients
export const getPatients = createAsyncThunk('patients/getAll',
    async(_, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await patientService.getPatients(token)
        } catch (error) {
            const message =
                (error.response &&
                 error.response.data &&
                 error.response.data.message) ||
                 error.message ||
                 error.ToString()
            return thunkAPI.rejectWithValue(message)
        }
})

// delete patient
export const deletePatient = createAsyncThunk('patients/delete',
    async(ID, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await patientService.deletePatient(ID, token)
        } catch (error) {
            const message =
                (error.response &&
                 error.response.data &&
                 error.response.data.message) ||
                 error.message ||
                 error.ToString()
            return thunkAPI.rejectWithValue(message)
        }
})

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers:(builder) => {
        builder
            .addCase(createPatient.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPatient.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.patients.push(action.payload)
            })
            .addCase(createPatient.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPatients.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPatients.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.patients = action.payload
            })
            .addCase(getPatients.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletePatient.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePatient.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.patients = state.patients.filter((patient) => patient.ID !==
                action.payload.ID)
            })
            .addCase(deletePatient.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = patientSlice.actions
export default patientSlice.reducer
