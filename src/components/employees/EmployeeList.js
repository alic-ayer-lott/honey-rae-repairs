import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeList = () => { //function that will render the JSX
    const [employees, changeEmployee] = useState([]) //useState returns an array; changeEmployee holding function that modifies state
    const [specialties, setSpecialty] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const justSpecialities = employees.map(emp => emp.specialty)
        setSpecialty(justSpecialities.join(","))
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])

    return (
        <>
                <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
                </div>
            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
