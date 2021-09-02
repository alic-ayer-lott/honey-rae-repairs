//this module acts as main.js from what we have been doing; this is just for layout
import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";

export const Repairs = () => { // defining and exporting component; this function should return JSX that shows in the browser

    return ( //must have return statement here to generate the HTML
        <>
            <NavBar />
            <h1> Honey Rae's Repair Shop </h1>

            <ApplicationViews />
        </> //must wrap in fragment if you are returning more than one element
    )
}
