import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <Link to="/" className="navbar-brand"><img className='img-fluid' style={{width: '150px'}} src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Topics</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/statistics">Statistics</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;