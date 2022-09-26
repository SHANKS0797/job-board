import React, { useState, useEffect } from "react";
import { Employeenavbar } from "../navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./employee.css";
import { db } from "../../fire";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export const Employeelogin = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [authenticated, stAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("click login : ", email);
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        navigate("/employeedashboard");
        console.log("Test login");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <>
      <Employeenavbar />
      <hr />
      <div className="login-container">
        <div className="header-text">
          <h3>Employee Login</h3>
        </div>
        <div className="e-mail">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="password">
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="login-button">
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div className="alt-button">
          <Link to="/employeeregistration">
            <Button variant="text">Not registered? Sign up</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
