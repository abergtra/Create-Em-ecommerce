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
    )
        
}