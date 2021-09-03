import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, hireEmployee] = useState({
        name: "",
        specialty:""
    });
    const history = useHistory();

    const enterEmployee = (evt) => {
        evt.preventDefault() //preventing default behavior of the browser
        const newEmployee = { 
            name: employee.name,
            specialty: employee.specialty
        };

        const fetchOption = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees") //pushing to browser history; once this triggers 
            })
        
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of new employee"
                        onChange={
                            (evt) => { //React will not let us directly modify state; cannot do ticket.description; must use updateTicket setter function
                                const copy = {...employee} //first copy existing state; use object spread operator to copy existing state; now "copy" is a brand new object with copied values from state
                                copy.name = evt.target.value // modify the copy
                                hireEmployee(copy) //taking the copy and making into new state
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Specialty of new employee"
                        onChange={
                            (evt) => { //React will not let us directly modify state; cannot do ticket.description; must use updateTicket setter function
                                const copy = {...employee} //first copy existing state; use object spread operator to copy existing state; now "copy" is a brand new object with copied values from state
                                copy.specialty = evt.target.value // modify the copy
                                hireEmployee(copy) //taking the copy and making into new state
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={enterEmployee}>
                Finish Hiring
            </button>
        </form>
    )
}
