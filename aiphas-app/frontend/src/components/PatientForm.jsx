import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createPatient} from '../features/patients/patientSlice'

function PatientForm() {
    const [ID, setID] = useState('')
    const [patname, setPatname] = useState('')
    const dispatch = useDispatch()
    
    const onSubmit = e => {
        e.preventDefault()
        dispatch(createPatient({ID, patname}))
        setID('')
        setPatname('')
    }
    
    return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Patient</label>
                <input
                    type="text"
                    name='ID'
                    id ='ID'
                    value={ID}
                    placeholder='Enter Patient ID'
                    onChange={(e)=> setID(e.target.value)}/>
                <input
                    type="text"
                    name='patname'
                    id ='patname'
                    value={patname}
                    placeholder='Enter Patient Name'
                    onChange={(e)=> setPatname(e.target.value)}/>
            </div>
            <div className='form-group'>
                <button className="btn btn-block" type='submit'>
                    Add Patient
                </button>
            </div>
        </form>
    </section>
  )
}
export default PatientForm