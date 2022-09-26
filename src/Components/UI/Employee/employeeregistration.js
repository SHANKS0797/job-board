import React, { useState } from "react";
import "./employee.css";
import { Employeenavbar } from "../navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "@mui/material";

export const Employeeregistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register_employee = () => {
    console.log("test 2 ", email);
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(" ----- ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Employeenavbar />
      <hr />
      <div className="registration-container">
        <div className="input-formatting">
          <h4>Employee name</h4>
          <TextField
            id="filled-basic"
            label="Employee name"
            variant="filled"
            className="field1"
            required
          />
        </div>
        <div className="input-formatting">
          <h4>Employee address</h4>
          <TextField
            id="filled-basic"
            label="Employee address"
            variant="filled"
            className="field1"
          />
        </div>

        <div className="input-formatting">
          <h4>E-mail</h4>
          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            className="field1"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-formatting">
          <h4>Password</h4>
          <TextField
            id="filled-basic"
            variant="filled"
            className="field1"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-formatting">
          <h4>Phone no.</h4>
          <TextField
            id="filled-basic"
            label="Phone no."
            variant="filled"
            className="field1"
          />
        </div>
        <div className="submission-details">
          <div className="register">
            <Button variant="contained" onClick={register_employee}>
              Register
            </Button>
          </div>
          <div className="login">
            <Link to="/employeelogin">
              <Button variant="contained" id="login">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
