import {useDispatch} from 'react-redux'
import {deletePatient} from '../features/patients/patientSlice'

function PatientItem({patient}) {
  const dispatch = useDispatch()
  return (
    <div>Patient 
      <h1> {patient.ID} </h1>
        <div className="patient">
          <h2> {patient.patname} </h2>
          <button onClick={()=> dispatch(deletePatient(patient.ID))}
                  className="close"> X </button>
          <div>
            allergic med: {patient.allergicMed}
          </div>
          <div>
            anticoag med: {patient.anticoagMed}
          </div>
          <div>
            hospitalized: {patient.hospitalized}
          </div>
          <div>
            operation: {patient.operation}
          </div>
          <div>
            med: {patient.med}
          </div>
          <div>
            lab: {patient.lab}
          </div>
          <div>
            創建時間:{new Date(patient.createdAt).toLocaleString('en-US')}
          </div>
          <div>
            上次更新:{new Date(patient.updatedAt).toLocaleString('en-US')}
          </div>
        </div>
    </div>
  )
}
export default PatientItem