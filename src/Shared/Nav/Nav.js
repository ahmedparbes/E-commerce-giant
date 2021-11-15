import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className="font">
            <div className="top-header">
                <div>
                    <p>Welcome to Romi!</p>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"> <p>SignIn/Register</p></Link>
                </div>
            </div>
            <hr />
            <div className="top-header-two">
                <div>
                    <img src="https://i.ibb.co/s2VDVJZ/logo-white.png" alt="" />
                </div>
                <div>
                    <input style={{ height: '40px' }} type="text" class="searchTerm" placeholder="Search Product" />
                    <button style={{ backgroundColor: 'purple', color: 'white', marginLeft: '7px' }} type="submit" class="searchButton">
                        <i class="fa fa-search"> Search</i>
                    </button>
                </div>
                <div>
                    <button style={{ border: '0px', }}> <i style={{ color: "black" }} class="fas fa-shopping-bag"></i></button>
                    <button style={{ border: '0px', backgroundColor: 'none', marginLeft: '6px' }}><i class="far fa-user-circle"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Nav;