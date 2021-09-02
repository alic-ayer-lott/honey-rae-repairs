import React from "react"
import { Link } from "react-router-dom" //link component imported from react-router-dom
import "./NavBar.css"

export const NavBar = (props) => {
    return ( // JSX unordered list
        <ul className="navbar"> 
                    <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link> 
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link> 
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Service Tickets</Link> 
            </li>
        </ul> //"link" components job is to generate anchor tags; sole job; "to" attritube is the HREF of anchor tag
    )
}
//whenever one of the links is clicked, it changes the browser URL