import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";


const Header = () => {
const [loginreactbtn , setloginreactbtn] = useState("Login");

    return (
      <div className="heading">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL} alt="THis is Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>about</li>
            <li>Services</li>
            <li>Contact</li>
            <button className="react-login-btn" onClick={ ()=>{
              loginreactbtn === "Login" ?
              setloginreactbtn("Logout"):
              setloginreactbtn("Login");
            }} >{loginreactbtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;