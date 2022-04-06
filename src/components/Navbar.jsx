import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <li className="nav-links">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-links card-link">
                <Link to="/cards">Cards</Link>
            </li>

        </div>
    )
}

export default Navbar