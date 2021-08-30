//this module acts as main.js from what we have been doing; this is just for layout
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";

export const Repairs = () => { // defining and exporting component; this function should return JSX that shows in the browser

    return ( //must have return statement here to generate the HTML
        <>
        <h1> Honey Rae's Repair Shop </h1>
        <h2>Customers</h2>
        <CustomerList />
        <h2>Employees</h2>
        <EmployeeList />
        </>
    )
}
