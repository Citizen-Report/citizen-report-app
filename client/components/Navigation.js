import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = props => {

    const auth = useSelector(state => state.auth);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">HEY! <small>City Management</small></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/createComplaint">Create Complaint</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Auth</Link>
                        </li>                       
                    </ul>
                </div>
                <span className="navbar-text">
                    {
                        auth.isLoggedIn ?
                            (
                                <div className="text-center">
                                    <img src={auth.profileObj.imageUrl} className="rounded-circle" style={{ width: 30, height: "auto" }} />
                                    <span>  | </span><span> Hi, {auth.profileObj.name}</span>
                                </div>
                            ) :
                            <div className="text-center">
                                You are not logged in...
                            </div>
                    }

                </span>
            </nav>
        </>
    )
}

export default Navigation;