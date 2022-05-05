import { gql, useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import "./ADP.css";

const FETCH_CARD = gql`
  query {
    administerPatients {
      nameofthepatient
      dateofbirth
      vaccination
      dateadministered
      brandname
      givenat
    }
  }
`;

const AdministerPatientCard = () => {
  const { data } = useQuery(FETCH_CARD);
  console.log("data",data);

  return (
    <div className="container">
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        { data && data.administerPatients && data.administerPatients.map((administerPatient: any) => (
          <Card className="col-md-4 card" style={{ border: "1px black solid" }}>
            <Card.Header
              className="text-center rounded border border-secondary text-light bg-dark"
              style={{ border: "1px dark solid", margin: "5px"}}
            >
              Vaccination Card
            </Card.Header>
            <Card.Body>
              <Card.Text className="mb-2 text-muted">
                Name :{administerPatient.nameofthepatient}
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Date of Birth:
                {administerPatient.dateofbirth}
              </Card.Text>
              <Card.Text>
                Vaccination:
                {administerPatient.vaccination}
              </Card.Text>
              <Card.Text>
                Date Administstered:
                {administerPatient.dateadministered}
              </Card.Text>
              <Card.Text>
                Brand Name:
                {administerPatient.brandname}
              </Card.Text>
              <Card.Text>
                Given At:
                {administerPatient.givenat}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdministerPatientCard;

// {/* <table>

//         <tr>
//          <th>Name</th>
//          <th>DOB</th>
//          <th>Vaccination</th>
//          <th>Brand</th>
//          <th>Date</th>
//          <th>Given At</th>
//          </tr>

//          <tr>
//              <td>
//              {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.nameofthepatient}>
//                         {administerPatient.nameofthepatient}
//                     </option>
//                 ))}
//              </td>
//              <td>
//              {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.dateofbirth}>
//                         {administerPatient.dateofbirth}
//                     </option>
//                 ))}
//              </td>
//              <td>
//              {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.vaccination}>
//                         {administerPatient.vaccination}
//                     </option>
//                 ))}
//              </td>

//              <td>
//              {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.brandname}>
//                         {administerPatient.brandname}
//                     </option>
//                 ))}
//              </td>
//              <td>
//              {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.dateadministered}>
//                         {administerPatient.dateadministered}
//                     </option>
//                 ))}
//              </td>
//              <td>
//              {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.givenat}>
//                         {administerPatient.givenat}
//                     </option>
//                 ))}
//              </td>
//             </tr>
//     </table> */}
// {/* <div className="col-12 card">
//         <h5 className="card-header text-center">Vaccination Card</h5>
//         <div className="card-body">
//         <h6> Name of the Patient :
//                 {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.nameofthepatient}>
//                         {administerPatient.nameofthepatient}
//                     </option>
//                 ))}
//         </h6>
//         <h6> Date of Birth :
//                 {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.dateofbirth}>
//                         {administerPatient.dateofbirth}
//                     </option>
//                 ))}
//         </h6>
//         <h6> Vaccination :
//                 {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.vaccination}>
//                         {administerPatient.vaccination}
//                     </option>
//                 ))}
//         </h6>
//         <h6> Date Administered :
//                 {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.dateadministered}>
//                         {administerPatient.dateadministered}
//                     </option>
//                 ))}
//         </h6>
//         <h6> Brand Name :
//                 {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.brandname}>
//                         {administerPatient.brandname}
//                     </option>
//                 ))}
//         </h6>
//         <h6> Given At :
//                 {data.administerPatients.map((administerPatient:any) =>(
//                     <option key={administerPatient.id} value={administerPatient.givenat}>
//                         {administerPatient.givenat}
//                     </option>
//                 ))}
//         </h6>
//         </div>
//     </div> */
