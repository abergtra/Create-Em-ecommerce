//import react and authorization
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

//NavBar component function
function NavBar() {
    //HTML for header logo and call function show conditional options
    return (
        <header className="flex-row px-1">
            <h1>
                {/* Insert  */}
                <Link to="/">
                    <img src="/images/logo.png" alt="logo"/>
                </Link>
            </h1>
            <nav>
                {showNavigation()}
            </nav>
        </header>
    );

    //Function to display certain HTML depending on login status
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/boardHistory">
                        Board History
                        </Link>
                    </li>
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                        Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/signup">
                        Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">
                        Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }
        
}

export default NavBar;