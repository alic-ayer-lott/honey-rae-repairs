import React, { useEffect, useState } from "react"; // importing React here so we can have React library

export const Repairs = () => { // defining and exporting component; this function should return JSX that shows in the browser
    const [customers, setCustomers] = useState([]) //invoking use state will return an array; why there is an array as the const
        // setCustomers variables job is to hold function that modifies state for customers
    
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray) //you must use a function to modify state
                })
        },
        []
    ) // this is another hook bc it starts with use; a function we can invoke; takes 2 arguments; first is function second is always array
        //sole purpose of useEffect is to run certain code when state changes
    return ( //must have return statement here to generate the HTML
        <>
        <h1> Honey Rae's Repair Shop </h1>
        {
            customers.map( // using .map as array method conversion tool
                (customerObject) => {
                    return <h2>{customerObject.name}</h2> //do not need $ to interpolate in JSX
                }
            )
        }
        </>
    )
}
