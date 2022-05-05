import { Link } from "react-router-dom";
import Caption from "./Caption";
const HomePage = () => {

    return (
       <div className="container">
       <div className="card">
            <h1 className="display-4 text-center card-header">Welcome to Vaccination</h1>
            <div className="row">
                <div className="col-4 card-body">
                    <ul className="offset-2">
                        <li>
                            <Link  to="/patients"><h5>Add New Patients</h5></Link>
                        </li>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <li>
                            <Link  to="/administerPatients"><h5>Administer Vaccination</h5></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                 <Caption/>
                </div>
            </div>
        </div>
        <hr/>
      </div>
        
        
    )

}

export default HomePage;