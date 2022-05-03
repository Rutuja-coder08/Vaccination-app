import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CREATE_PATIENT_MUTATION = gql`
mutation onCreatePatientMutation (
    $patientname : String!,
    $dateofbirth : String!,
    $gender : String!,
    $placeofbirth : String!,
    $bloodgroup : String!,
    $height : String!,
    $weight : String!
    ){
      createPatient(data : {
      patientname : $patientname,
      dateofbirth : $dateofbirth,
      gender : $gender,
      placeofbirth : $placeofbirth,
      bloodgroup : $bloodgroup,
      height : $height,
      weight : $weight
    })
    {
      patientname, dateofbirth, gender, placeofbirth, bloodgroup, height, weight, id
    }
  }
`

const AddPatient = () => {

    const [patientState, setPatientState] = useState<{
        patientname : string,
        dateofbirth : string,
        gender : string,
        placeofbirth : string,
        bloodgroup : string,
        height : string,
        weight : string,
    }>({
        patientname : '',
        dateofbirth : '',
        gender : '',
        placeofbirth : '',
        bloodgroup : '',
        height : '',
        weight : ''
    })

    const [createPatientCallback, {data, error, loading}] = useMutation(CREATE_PATIENT_MUTATION,{
        variables : {
            patientname : '',
            dateofbirth : '',
            gender : '',
            placeofbirth : '', 
            bloodgroup : '',
            height : '',
            weight : ''
        }
    })

    const createPatientHandler = (event : React.FormEvent) => {
        event.preventDefault()
        createPatientCallback({
          variables: {
            patientname : patientState.patientname,
            dateofbirth :patientState.dateofbirth,
            gender : patientState.gender,
            placeofbirth : patientState.placeofbirth,
            bloodgroup : patientState.bloodgroup,
            height :patientState.height,
            weight : patientState.weight
          }
        })
      }
    

    const patientnameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, patientname : event.target.value})
    }

    const dateofbirthChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, dateofbirth : event.target.value})
    }

    const genderChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, gender : event.target.value})
    }

    const placeofbirthChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, placeofbirth : event.target.value})
    }

    const bloodgroupChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, bloodgroup : event.target.value})
    }

    const heightChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, height : event.target.value})
    }

    const weightChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
        setPatientState({ ...patientState, weight : event.target.value})
    }

    const history = useHistory()

    if(error) return <h4> Something went wrong </h4>
    // if(loading) return <h4> Loading... </h4>

    return(
        <div className="row">

            <div className="col-12">
            <h2 className="offset-3"> Add New Patients </h2>
            <br/>
            </div>

            <div className="col-12">
                <form>
                    <label htmlFor="patientname">Patient Name</label>
                    <input type="text" name="patientname" className="form-control" value={patientState.patientname} onChange={patientnameChangeHandler}/>

                    <label htmlFor="dateofbirth">Date of Birth</label>
                    <input type="date" name="dateofbirth" className="form-control" value={patientState.dateofbirth} onChange={dateofbirthChangeHandler}/>

                    <label htmlFor="gender">Gender</label>
                    <input type="text" name="gender" className="form-control" value={patientState.gender} onChange={genderChangeHandler}/>

                    {/* <select name="gender" className="form-control" value={patientState.gender} onChange = { () => genderChangeHandler}>         
                        <option value={patientState.gender}>Male</option>
                        <option value={patientState.gender}>Female</option>
                    </select> */}

                    <label htmlFor="placeofbirth">Place of Birth</label>
                    <input type="text" name="placeofbirth" className="form-control" value={patientState.placeofbirth} onChange={placeofbirthChangeHandler}/>

                    <label htmlFor="bloodgroup">Blood Group</label>
                    <input type="text" name="bloodgroup" className="form-control" value={patientState.bloodgroup} onChange={bloodgroupChangeHandler}/>

                    {/* <select name="bloodgroup" className="form-control" value={patientState.bloodgroup} onChange = { () => bloodgroupChangeHandler}>         
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select> */}

                    <label htmlFor="height">Height</label>
                    <input type="text" name="height" className="form-control" value={patientState.height} onChange={heightChangeHandler}/>

                    <label htmlFor="weight">Weight</label>
                    <input type="text" name="weight" className="form-control" value={patientState.weight} onChange={weightChangeHandler}/>

                    <br/>
                    
                    <button className="btn btn-dark" onClick={createPatientHandler}>Create New Patient</button>
                    <button className="btn btn-dark offset-1" onClick={() => history.push('/')} >Cancel</button>
                </form>
                <br/>
                {data && <p>Patient Created Successfully</p>}
            </div>
        </div>
    )
}

export default AddPatient