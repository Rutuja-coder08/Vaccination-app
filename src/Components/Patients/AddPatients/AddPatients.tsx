import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CREATE_PATIENT_MUTATION = gql`
  mutation onCreatePatientMutation(
    $patientname: String!
    $dateofbirth: String!
    $gender: String!
    $placeofbirth: String!
    $bloodgroup: String!
    $height: String!
    $weight: String!
  ) {
    createPatient(
      data: {
        patientname: $patientname
        dateofbirth: $dateofbirth
        gender: $gender
        placeofbirth: $placeofbirth
        bloodgroup: $bloodgroup
        height: $height
        weight: $weight
      }
    ) {
      patientname
      dateofbirth
      gender
      placeofbirth
      bloodgroup
      height
      weight
      id
    }
  }
`;

const AddPatient: React.FC<{ onAddData: () => void }> = (props) => {
  
  const [patientState, setPatientState] = useState<{
    patientname: string;
    dateofbirth: string;
    gender: string;
    placeofbirth: string;
    bloodgroup: string;
    height: string;
    weight: string;
  }>({
    patientname: "",
    dateofbirth: "",
    gender: "",
    placeofbirth: "",
    bloodgroup: "",
    height: "",
    weight: "",
  });

  const [createPatientCallback, { error, loading, data:Pdata }] = useMutation(
    CREATE_PATIENT_MUTATION,
    {
      variables: {
        patientname: "",
        dateofbirth: "",
        gender: "",
        placeofbirth: "",
        bloodgroup: "",
        height: "",
        weight: "",
      },
    }
  );

  const createPatientHandler = (event: React.FormEvent) => {
    event.preventDefault();
    createPatientCallback({
      variables: {
        patientname: patientState.patientname,
        dateofbirth: patientState.dateofbirth,
        gender: patientState.gender,
        placeofbirth: patientState.placeofbirth,
        bloodgroup: patientState.bloodgroup,
        height: patientState.height,
        weight: patientState.weight,
      },
    }).then(res =>{
      history.replace("/")
      alert("Patient's details is saved successfully!")
        window.location.reload();
    }).catch(err=>{
      alert("Enter Data")
    })
 };

  const patientnameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPatientState({ ...patientState, patientname: event.target.value });
  };

  const dateofbirthChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPatientState({ ...patientState, dateofbirth: event.target.value });
  };

  const genderChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setPatientState({ ...patientState, gender: event.target.value });
  };

  const placeofbirthChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setPatientState({ ...patientState, placeofbirth: event.target.value });
  };

  const bloodgroupChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setPatientState({ ...patientState, bloodgroup: event.target.value });
  };

  const heightChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPatientState({ ...patientState, height: event.target.value });
  };

  const weightChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPatientState({ ...patientState, weight: event.target.value });
  };

  const history = useHistory();

  if (error) return <h4> {error?.message} </h4>;
  // if(loading) return <h4> Loading... </h4>

  return (
    <div className="container">
      <div className="col-12">
      <h3 className="text-center rounded border border-secondary text-light bg-dark"> Add New Patients </h3>
      </div>
      <hr></hr>
        <div className="col-12 card">
        <form>
          <label htmlFor="patientname" className="font-weight-bold">
            * Patient Name 
          </label>
          <input
            type="text"
            name="patientname"
            className="form-control"
            value={patientState.patientname}
            onChange={patientnameChangeHandler}
          />

          <label htmlFor="dateofbirth" className="font-weight-bold">
            * Date of Birth
          </label>
          <input
            type="date"
            name="dateofbirth"
            className="form-control"
            value={patientState.dateofbirth}
            onChange={dateofbirthChangeHandler}
          />

          <label htmlFor="gender" className="font-weight-bold">
            Gender
          </label>
          {/* <input type="text" name="gender" className="form-control" value={patientState.gender} onChange={genderChangeHandler}/> */}

          <select
            name="gender"
            className="form-control"
            value={patientState.gender}
            onChange={genderChangeHandler}
          >
            <option value="">Select One Option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="placeofbirth" className="font-weight-bold">
            Place of Birth
          </label>
          <input
            type="text"
            name="placeofbirth"
            className="form-control"
            value={patientState.placeofbirth}
            onChange={placeofbirthChangeHandler}
          />

          <label htmlFor="bloodgroup" className="font-weight-bold">
            Blood Group
          </label>
          {/* <input type="text" name="bloodgroup" className="form-control" value={patientState.bloodgroup} onChange={bloodgroupChangeHandler}/> */}

          <select
            name="bloodgroup"
            className="form-control"
            value={patientState.bloodgroup}
            onChange={bloodgroupChangeHandler}
          >
             <option value="">Select One Option</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB+">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label htmlFor="height" className="font-weight-bold">
            Height
          </label>
          <input
            type="text"
            name="height"
            className="form-control"
            value={patientState.height}
            onChange={heightChangeHandler}
          />

          <label htmlFor="weight" className="font-weight-bold">
            Weight
          </label>
          <input
            type="text"
            name="weight"
            className="form-control"
            value={patientState.weight}
            onChange={weightChangeHandler}
          />

          <br />

          <button className="btn btn-outline-dark"  onClick={createPatientHandler}>
            Create New Patient
          </button>
          <button
            className="btn btn-outline-dark offset-1"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
        </form>
        
        {Pdata && <p>Patient Created Successfully</p>}
      </div>
    </div>
  );
};

export default AddPatient;
