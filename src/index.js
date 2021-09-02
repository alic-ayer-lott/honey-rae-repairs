import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repairs } from "./components/Repairs";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render( //repairs is made to be a child component of browser router; just wrap that function within browser router
  <React.StrictMode>
    <BrowserRouter> 
      <Repairs /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
); //invoking the Repairs function with />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
