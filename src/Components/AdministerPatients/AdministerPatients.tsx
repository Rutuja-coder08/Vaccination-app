import { gql, useQuery } from '@apollo/client'
import AddAdministerPatient from './AddAdministerPatient/AddAdministerPatient'
import AdministerPatientCard from './AdministerPatientCard/AdministerPatientCard'
import { useState } from 'react'
const FETCH_ADMINISTER_PATIENTS = gql`
query{
    administerPatients{
      id nameofthepatient dateofbirth vaccination dateadministered brandname givenat 
    }
}`

const AdministerPatients = () => {
    const {error, loading, data} = useQuery(FETCH_ADMINISTER_PATIENTS)
    const [showForm, setShowForm] = useState<boolean>(false);
    if(error) return <h4> Something went wrong </h4>
    if(loading) return <h4> Loading... </h4>
     

    const onAddData = () => {
          setShowForm(false)
      }
  return (
    <div className="row">
        <div className="col-6 offset-3">
        <button className='btn btn-primary btn-block' onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'Hide Form' : 'Show Form'}
                  </button>
                  <hr/>
         
         {showForm && <AddAdministerPatient onAddData={onAddData} />}
        </div>
        <div className="col-6 offset-3">
          {/* <AdministerPatientCard/> */}
        </div>
    </div>
  ) 
}

export default AdministerPatients
// import { gql, useQuery } from '@apollo/client'
// import AddAdministerPatient from './AddAdministerPatient/AddAdministerPatient'
// import AdministerPatientCard from './AdministerPatientCard/AdministerPatientCard'
// import axios from 'axios';
// import { IPatient } from '../../model/patient.model';
// import { useState, useEffect } from 'react';
// import Patients from '../Patients/Patients';

// const FETCH_ADMINISTER_PATIENTS = gql`
// query{
//     administerPatients{
//       id nameofthepatient dateofbirth vaccination dateadministered brandname givenat 
//     }
// }`

// const BASE_URL: string = "mongodb://localhost:27017/brillio-db/patients";

// const fetchData = (): Promise<[IPatient]> => {
//   return new Promise((resolve, reject) => {
//       axios.get(BASE_URL)
//           .then(response => {
//               resolve(response.data);
//           })
//           .catch(err => reject(err))
//   })
// }

// const AdministerPatients = () => {
//     const {error, loading, data} = useQuery(FETCH_ADMINISTER_PATIENTS)
//     const [admisterPatients,setAdmisterPatients] = useState<Array<IPatient>>([]);
//     const [selectedId, setSelectedId] = useState<string>('');
//     // const [selectedPatientName, setSelectedPatientName] = useState<string>('');
//     // const [selectedDateOfBirth,setSelectedDateOfBirth] = useState<string>('');
//     // // if(error) return <h4> Something went wrong </h4>
//     // if(loading) return <h4> Loading... </h4>
//     const [showForm, setShowForm] = useState<boolean>(false);
//     useEffect(() => {
//       fetchData()
//           .then((patients) => setAdmisterPatients(admisterPatients))
//           .catch(console.log)
//   }, [])

//     useEffect(()=>{
//       fetchData()
//       .then((patients) => setAdmisterPatients(admisterPatients))
//         .catch(console.log)
//     },[selectedId])

//     const onIdSelect = (id: string) => {
//       setSelectedId(id)
//   }
//   const onAddData = () => {
//     setShowForm(false)
// }

// //   const onPatientNameSelect = (patientname: string) => {
// //     setSelectedPatientName(patientname)
// // }

// // const onDateOfBirthSelect = (dateofbirth: string) => {
// //   setSelectedDateOfBirth(dateofbirth)
// // }

//   return (
//     <div className="row">
//         <div className="col-6 offset-3">
//                     <button className='btn btn-primary btn-block' onClick={() => setShowForm(!showForm)}>
//                         {showForm ? 'Hide Form' : 'Add Item'}
//                     </button>
//         </div>
//         {showForm && <AddAdministerPatient onAddData={onAddData} />}
//         <div className='row'>
//                 {
//                     //admisterPatients.map( => <PostItem key={post.id} post={post} onItemSelect={onItemSelect} />)
//                 }
//             </div>
//         <div className="col-6 offset-3">
//           {/* <AdministerPatientCard/> */}
//         </div>
//     </div>
//   ) 
// }

// export default AdministerPatients 