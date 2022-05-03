import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div className="card">
            <p className="display-4 text-center card-header">Welcome to Vaccination App</p>
            <div className="row ">
                <div className="col-4 card-body">
                    <ul>
                        <li>
                            <Link className="font-weight-bold" to="/patients">Add New Patients</Link>
                        </li>
                        <li>
                            <Link className="font-weight-bold" to="/administerPatients">Administer Vaccination</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default HomePage;