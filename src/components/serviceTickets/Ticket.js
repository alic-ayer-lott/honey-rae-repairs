import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Ticket = () => {
    const [ticket, set] = useState({})  // State variable for current ticket object; set function takes what it is passed and puts it in ticket variable
    const { ticketId } = useParams()  // Variable storing the route parameter; ticket ID is the name of the key; use params captures the actual ID

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then((data) => { //data is what I am naming the translated JavaScript from fetch
                    set(data) //passing data into set function and naming it ticket
                })
        },
        [ ticketId ]  // Above function runs when the value of ticketId changes
        //First paramater is a function second parameter is when you want function to run (when the value of ticketId variable has changed)
    )

    return (
        <>
            <h2>Ticket {ticketId} Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to {ticket.employee?.name}</div>
            </section>
        </>
    )
}
//on initial rendering of this JSX the value of state variabel - ticket- is just a blank object- there is no embedded customer or employee object so name can't be accessed
//to fix this- put ? before each property- OPTIONAL CHAINING- "so... ONLY if the customer exists- display the name property and ONLY if the employee exists- show the name property"
//often in React components the initial state will cause it to not show due to nested properties