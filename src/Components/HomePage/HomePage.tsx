import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomePage.css';
const HomePage = () => {

  return (
    <div className="container">
      <div className="bg-dark">
      
       <h1 className="display-3 text-center text-light ">
          Welcome to Vaccination
        </h1>
       
      </div>  
      <div className="card">
      <br></br>
        <div className="row">
          <div className="col-4 card-body">
            <ul>
              <li>
                <Link to="/patients">
                  <h5 className="btn btn-outline-dark">Add New Patients</h5>
                </Link>
              </li>
              <hr />
              <hr />
              <hr />
              <hr />
              <li>
                <Link to="/administerPatients">
                  <h5 className="btn btn-outline-dark">Administer Vaccination</h5>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-3 text-center ">
         <br></br>
          
          <h2 className="bg-dark text-white font-weight-light">Educated</h2>
          <h2 className="bg-dark text-white font-weight-light">Motivated</h2>
          <h2 className="bg-dark text-white font-weight-light">Vaccinated</h2>
          <h2 className="bg-dark text-white font-weight-light">+get Vaccinated</h2>
          
          
          {/* <button type="button" className="btn btn-outline-dark">Educated</button>
          <button type="button" className="btn btn-outline-dark">Motivated</button>
          <button type="button" className="btn btn-outline-dark">Vaccinated</button>
          <button type="button" className="btn btn-outline-dark">+get Vaccinated</button> */}
  </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomePage;
