import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css"
import { TicketForm } from "./TicketForm"

export const TicketList = () => { //function that will render the JSX
    const [tickets, updateTickets] = useState([]) //updateTickets is the function that sets what is being held by tickets variable
    const [ticketCount, setTicketCount] = useState(0) //ticket count is variable holding data; state variable; setTicketCount is the function
    const history = useHistory()

    useEffect( //useEffect is like fetch get set all wrapped up in one
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "")
        setTicketCount(activeTicketCount.length)
    }, [tickets])

    return (
        <>
                <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
                </div>

                <div>
                There are {ticketCount} active tickets.
                </div>
        

            {
                tickets.map(
                    (ticket) => {
                        return <p key={`ticket--${ticket.id}`}>
                            {ticket.description} submitted by {ticket.customer.name}
                            and worked on by {ticket.employee.name}.
                            </p>
                    }
                )
            }
        </>
    )
}
