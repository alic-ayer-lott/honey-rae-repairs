import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    });
    const history = useHistory();

    const saveTicket = (evt) => {
        evt.preventDefault() //preventing default behavior of the browser
        const newTicket = { 
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")), // pulling the customer id from local storage
            employeeId: 1, //preventing JSON server from deleting our data
            dateCompleted: ""
        }

        const fetchOption = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/tickets") //pushing to browser history; once this triggers 
            })
        
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (evt) => { //React will not let us directly modify state; cannot do ticket.description; must use updateTicket setter function
                                const copy = {...ticket} //first copy existing state; use object spread operator to copy existing state; now "copy" is a brand new object with copied values from state
                                copy.description = evt.target.value // modify the copy
                                updateTicket(copy) //taking the copy and making into new state
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={ //function to handle the change
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked //there is no value here so use .checked to see if check box is clicked
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}
