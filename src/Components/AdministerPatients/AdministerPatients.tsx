import { gql, useQuery } from '@apollo/client'
import AddAdministerPatient from './AddAdministerPatient/AddAdministerPatient'
import AdministerPatientCard from './AdministerPatientCard/AdministerPatientCard'
import { useEffect, useState } from 'react'
const FETCH_ADMINISTER_PATIENTS = gql`
query{
    administerPatients{
      id nameofthepatient dateofbirth vaccination dateadministered brandname givenat 
    }
}`

const AdministerPatients = () => {
  const { error, loading, data } = useQuery(FETCH_ADMINISTER_PATIENTS)
  const [showForm, setShowForm] = useState<boolean>(false);
  // useEffect(()=>{
  //   const FETCH_ADMINISTER_PATIENTS = gql`
  //   query{
  //       administerPatients{
  //         id nameofthepatient dateofbirth vaccination dateadministered brandname givenat 
  //       }
  //   }`
  //  },[])
  const onAddData = () => {
    setShowForm(false);
  }
  if (error) return <h4> Something went wrong </h4>
  if (loading) return <h4> Loading... </h4>

  
  
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className='text-center'>
        <button className='btn btn-outline-dark' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        </div>
        <hr />

        {showForm && <AddAdministerPatient onAddData={onAddData} />}
      </div>
      <div className="col-12 offset-2">
        <AdministerPatientCard/>
      </div>
    </div>
  )
}

export default AdministerPatients