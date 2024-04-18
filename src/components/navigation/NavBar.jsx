import React from 'react'
import './navBar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("userCredentials");
        navigate('/')
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="logo">MayurTathe</span>
            </div>
            <div className="navbar-center">
                <ul className="nav-items">

                    <li>
                        <NavLink className="nav-item" activeClassName="active" to="/map">MapScreen</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" activeClassName="active" to="/movie">Movies</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <p>Welcome &nbsp;<span className="admin-name">{JSON.parse(localStorage.getItem('userCredentials')).username}</span></p>
                <button className='btn' onClick={handleClick}>LogOut</button>
            </div>
        </nav>
    )
}

export default NavBar
