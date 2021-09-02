//this module acts as main.js from what we have been doing; this is just for layout
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css"

export const Repairs = () => ( // defining and exporting component; this function should return JSX that shows in the browser

    <>
    <Route //every route has a custom rendering function if needed; most routes will be the same as what is in ApplicationViews
      render={() => {  //this is a custom render function because it includes logic with if statement
        if (localStorage.getItem("honey_customer")) { //if there is something in local storage (user has logged in at some point) then render home page
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else { //if user has never logged in- they don't have a primary key- show login page (login.js)
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)