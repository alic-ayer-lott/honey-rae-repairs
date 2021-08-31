//this module acts as main.js from what we have been doing; this is just for layout
import React, { useEffect, useState } from "react"; // importing React here so we can have React library

export const CustomerList = () => { // defining and exporting component; this function should return JSX that shows in the browser
    const [customers, setCustomers] = useState([]) //invoking use state will return an array; why there is an array as the const on the left
        // setCustomers variables job is to hold function that modifies state for customers
    const [totalCustomerMessage, updateMessage] = useState("") //message will be updated every time customer state changes
    
    useEffect(
        () => {
            console.log("Initial useEffect") // to show how code is working in order
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray) //you must use a function to modify state
                })
        },
        []
    ) // this is another hook bc it starts with use; a function we can invoke; takes 2 arguments; first is function second is always array
        //sole purpose of useEffect is to run certain code when state changes

    useEffect(
        () => { //first parameter for useEffect; if statement
            console.log("Customers state changed")
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers] // second parameter for useEffect; array holding state variable of when useEffect should run; when customers changes
    )

    return ( //must have return statement here to generate the HTML
        <>
            <div>{totalCustomerMessage}</div>
        {
            customers.slice(0,5).map( // using .map as array method conversion tool; .slice to show which slots of array you want to display
                (customerObject) => {
                    return <h3 key={`customer --${customerObject.id}`}>{customerObject.name}</h3> //do not need $ to interpolate in JSX
                }
            )
        }
        </>
    )
}
