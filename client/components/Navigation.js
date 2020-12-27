import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">HEY! <small>City Management</small></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Auth</Link>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                    <div className="text-center">
                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2275%22%20height%3D%2275%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2075%2075%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176a2bb1a2c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176a2bb1a2c%22%3E%3Crect%20width%3D%2275%22%20height%3D%2275%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2219.3359375%22%20y%3D%2242%22%3E75x75%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="rounded-circle" style={{width: 30, height: "auto"}} />
                        <span>  | </span><span> Hi, NAME</span>
                    </div>
                </span>
            </nav>
        </>
    )
}

export default Navigation;