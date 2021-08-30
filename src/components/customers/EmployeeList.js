import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState ([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
        {
            employees.map(
                (employeeObject) => {
                    return <h3 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h3>
                }
            )
        }
        </>
    )
}