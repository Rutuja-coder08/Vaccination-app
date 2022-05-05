import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="container">
       <h1 className="display-3 text-center text-light bg-dark">
          Welcome to Vaccination
        </h1>
      <div className="card">
        <div className="row">
          <div className="col-4 card-body">
            <ul>
              <li>
                <Link to="/patients">
                  <h5 className="text-dark">Add New Patients</h5>
                </Link>
              </li>
              <hr />
              <hr />
              <hr />
              <hr />
              <li>
                <Link to="/administerPatients">
                  <h5 className="text-dark">Administer Vaccination</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomePage;
