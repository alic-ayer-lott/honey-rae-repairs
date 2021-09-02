//this module works in tandem with the navbar module; the routes in here are listening for the events
//when URL matches, it will display or render that component to the user- pattern matching
// setting up the individual routes and which component should be displayed when a browser route is changed in url

import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList /> 
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/tickets">
                <TicketList /> 
            </Route>
        </>
    )
}
//EmployeeList and CustomerList and children of the route paths