import { gql ,useQuery} from "@apollo/client";
import "./ADP.css";
const FETCH_CARD =gql`
query{
    administerPatients{
      nameofthepatient dateofbirth vaccination dateadministered brandname givenat
    }
  }
`

const AdministerPatientCard = () => {

    const  { data } = useQuery(FETCH_CARD)

    return (
        
        <div className="container">

           <div>
            <table>
                <tr>
                 <th>Name</th>
                 <th>DOB</th>
                 <th>Vaccination</th>
                 <th>Brand</th>
                 <th>Date</th>
                 <th>Given At</th>
                 </tr>

                 <tr>
                     <td>
                     {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.nameofthepatient}>
                                {administerPatient.nameofthepatient}
                            </option>
                        ))}
                     </td>
                     <td>
                     {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.dateofbirth}>
                                {administerPatient.dateofbirth}
                            </option>
                        ))}
                     </td>
                     <td>
                     {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.vaccination}>
                                {administerPatient.vaccination}
                            </option>
                        ))}
                     </td>
                    
                     <td>
                     {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.brandname}>
                                {administerPatient.brandname}
                            </option>
                        ))}
                     </td>
                     <td>
                     {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.dateadministered}>
                                {administerPatient.dateadministered}
                            </option>
                        ))}
                     </td>
                     <td>
                     {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.givenat}>
                                {administerPatient.givenat}
                            </option>
                        ))}
                     </td>
                    </tr> 
            </table>
            {/* <div className="col-12 card">
                <h5 className="card-header text-center">Vaccination Card</h5>
                <div className="card-body">
                <h6> Name of the Patient :
                        {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.nameofthepatient}>
                                {administerPatient.nameofthepatient}
                            </option>
                        ))}
                </h6>
                <h6> Date of Birth :
                        {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.dateofbirth}>
                                {administerPatient.dateofbirth}
                            </option>
                        ))}
                </h6>
                <h6> Vaccination :
                        {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.vaccination}>
                                {administerPatient.vaccination}
                            </option>
                        ))}
                </h6>
                <h6> Date Administered :
                        {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.dateadministered}>
                                {administerPatient.dateadministered}
                            </option>
                        ))}
                </h6>
                <h6> Brand Name :
                        {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.brandname}>
                                {administerPatient.brandname}
                            </option>
                        ))}
                </h6>
                <h6> Given At :
                        {data.administerPatients.map((administerPatient:any) =>(
                            <option key={administerPatient.id} value={administerPatient.givenat}>
                                {administerPatient.givenat}
                            </option>
                        ))}
                </h6>
                </div>
            </div> */}
              </div>
            </div>
      
    )
}

export default AdministerPatientCard;