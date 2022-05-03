import React from "react";

const AdministerPatientCard : React.FC<{
    nameofthepatient : string, 
    dateofbirth : string,
    vaccination : string,
    dateadministered : string,
    brandname : string,
    givenat : string}> = (props) => {

    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <p> Name of the Patient : {props.nameofthepatient} </p>
                </div>
                <div className="card-body">
                    <p>Date of Birth : {props.dateofbirth}</p>
                </div>
                <div className="card-body">
                    <p>Vaccination : {props.vaccination}</p>
                </div>
                <div className="card-body">
                    <p>Date Administered : {props.dateadministered}</p>
                </div>
                <div className="card-body">
                    <p>Brand Name : {props.brandname}</p>
                </div>
                <div className="card-body">
                    <p>Given At : {props.givenat}</p>
                </div>
            </div>
        </div>
    )
}

export default AdministerPatientCard;