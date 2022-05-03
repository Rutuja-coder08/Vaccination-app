import { gql, useQuery } from '@apollo/client'
import { IPatient } from '../../model/patient.model'
import AddPatient from './AddPatients/AddPatient';
const FETCH_PATIENTS=gql`
query{
    patients{
        id patientname dateofbirth gender height weight placeofbirth bloodgroup 
    }
}`

const Patients = () => {
    const {error, loading, data} = useQuery(FETCH_PATIENTS)
    
    if(error) return <h4> Something went wrong </h4>
    if(loading) return <h4> Loading... </h4>

  return (
    <div className="row">
        <div className="col-6 offset-3">
            <AddPatient/>
        </div>
    </div>
  ) 
}

export default Patients