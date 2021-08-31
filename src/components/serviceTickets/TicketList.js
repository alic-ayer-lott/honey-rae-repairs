import React, { useEffect, useState } from "react"

export const TicketList = () => { //function that will render the JSX
    const [tickets, updateTickets] = useState([])

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

    return (
        <>
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
