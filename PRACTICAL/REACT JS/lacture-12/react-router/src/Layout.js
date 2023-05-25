import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="bg-dark text-white">
                <div className="row">

                    <div className="col-3">
                        <h1 className="m-4 text-warning logo">MyApp</h1>
                    </div>
                    <ul className="col-9" align="end">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/About-us">About</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;