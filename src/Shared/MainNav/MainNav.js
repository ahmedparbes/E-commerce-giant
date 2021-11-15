import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNav.css'

const MainNav = () => {

    return (
        <div className="font">

            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="px-7 nav-link">
                        <Link to="/home">Home</Link>
                        <Link to="/about"> About</Link>
                        <Link to="/doctors">Doctors</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/contact">Contact</Link>

                        <button className="btn-warning  "><i class="fa fa-sign-out" aria-hidden="true"><span className="font mx-1"> Logout</span></i></button>
                    </Nav>
                    <Navbar.Text>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Navbar >


        </div>
    );
};

export default MainNav;