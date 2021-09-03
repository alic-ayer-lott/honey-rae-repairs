//this module works in tandem with the navbar module; the routes in here are listening for the events
//when URL matches, it will display or render that component to the user- pattern matching
// setting up the individual routes and which component should be displayed when a browser route is changed in url

import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList /> 
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/tickets">
                <TicketList /> 
            </Route>

            <Route path="/ticket/create">
                <TicketForm />
            </Route>

            <Route path="/employee/create">
                <EmployeeForm />
            </Route>

        </>
    )
}
//EmployeeList and CustomerList are children of the route paths