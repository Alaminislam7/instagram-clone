import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <nav>
            <div className="nav-wrapper white">
                <a href="#" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/signup">Signin</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;