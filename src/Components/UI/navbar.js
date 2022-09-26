import React from "react";
import "./dashboard/dashboard.css";
import "./Employee/employee.css";
import "./Employer/employer.css";
import Button from "@mui/material/Button";
import { Employeelogin } from "./Employee/employeelogin";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export const Dashboardnavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <div className="logo">
          <div className="logo-text">
            <Link to="/">
              <h1>Job Board</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="right-nav">
        <Link to="/employeelogin">
          <Button variant="contained" disableElevation>
            Employee login
          </Button>
        </Link>

        <Link to="/employerlogin">
          <Button variant="contained" disableElevation>
            Employer login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export const Employeenavbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="left-nav">
          <div className="header">
            <Link to="/">
              <h1>Job Board</h1>
            </Link>
          </div>
        </div>
        <div className="right-nav">
          <Link to="/employerlogin">
            <Button variant="contained" disableElevation>
              Employer login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export const Employernavbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="left-nav">
          <div className="header">
            <Link to="/">
              <h1>Job Board</h1>
            </Link>
          </div>
        </div>
        <div className="right-nav">
          <Link to="/employeelogin">
            <Button variant="contained" disableElevation>
              Employee login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export const EmpDashboardNav = () => {
  const navigate = useNavigate();
  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(
      (response) => {
        navigate("/");
        console.log("USER LOGGED OUT");
        sessionStorage.clear();
      }
    )
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo">
            <div className="logo-text">
              <Link to="/">
                <h1>Job Board</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="right-nav">
          <Link to="/">
            <Button variant="contained" disableElevation>
              Logout
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
};
