import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    
    <header>
        <nav>
            <ul className='nav nav-tabs justify-content-center'>
                <li className='nav-item'>
                    <NavLink  activeClassName='active' to="/home" className='nav-link font-weight-bold text-dark'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink  activeClassName='active' to="/patients" className='nav-link font-weight-bold text-dark'>Add Patients</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink   activeClassName='active' to="/administerPatients" className='nav-link font-weight-bold text-dark'>Administer Patients</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
