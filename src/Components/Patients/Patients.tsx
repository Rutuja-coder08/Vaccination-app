import { gql, useQuery } from '@apollo/client'
import { IPatient } from '../../model/patient.model'
import AddPatient from './AddPatients/AddPatients';
import { useState } from 'react';
const FETCH_PATIENTS=gql`
query{
    patients{
        id patientname dateofbirth gender height weight placeofbirth bloodgroup 
    }
}`

const Patients = () => {
    const {error, loading, data} = useQuery(FETCH_PATIENTS)
    const [showForm, setShowForm] = useState<boolean>(false);
    if(error) return <h4> Something went wrong {error?.message} </h4>
    if(loading) return <h4> Loading... </h4>
    const onAddData = () => {
        setShowForm(false)
    }
  return (
    <div className="row">
        <div className="col-6 offset-3">
            <div className='text-center'>
        <button className='btn btn-primary' onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Close Form' : 'Add Form'}
        </button>
        </div>
        <hr/>
        {showForm && <AddPatient onAddData={onAddData} />}
        </div>
    </div>
  ) 
}

export default Patients