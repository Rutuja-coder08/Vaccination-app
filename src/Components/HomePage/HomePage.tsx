import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div>
            <p className="display-4 text-center">Welcome to Vaccination App</p>
            <div className="row">
                <div className="col-4">
                    <ul>
                        <li>
                            <Link to="/patients">Add New Patients</Link>
                        </li>
                        <li>
                            <Link to="/administerPatients">Administer Vaccination</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default HomePage;