import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    };
    return (
        <header style={{position: 'sticky', top: '0', zIndex: '4'}} className="bg-dark">
            <div>
                <nav style={{color: 'white'}} className="d-flex justify-content-center">
                    <ul className="nav-style d-flex flex-wrap justify-content-center align-items-center my-auto">
                        <li style={{marginLeft: '-23px'}}><NavLink activeStyle={activeStyle} to="/feed">Feed</NavLink></li>
                        <li><NavLink activeStyle={activeStyle} to="/pringo">Pringo!</NavLink></li>
                        <li><NavLink activeStyle={activeStyle} to="/prings">Prings</NavLink></li>
                        <li><NavLink activeStyle={activeStyle} to="/profile">Profile</NavLink></li>
                        {
                            user?.email &&
                            <li className="text-success">{user?.displayName}</li>
                        }
                        <li className="nav-item">
                            <button onClick={logOut} className="btn btn-outline-light">Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;