import React from "react";
import "./App.css";
import { Dashboard } from "./Components/UI/dashboard/dashboard";
import { Employerlogin } from "./Components/UI/Employer/employerlogin";
import { Employeelogin } from "./Components/UI/Employee/employeelogin";
import { Employerregistration } from "./Components/UI/Employer/employerregistration";
import { Employeeregistration } from "./Components/UI/Employee/employeeregistration";
import { Employeedashboard } from "./Components/UI/EmployeeDashboard/employeedashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employeelogin" element={<Employeelogin />} />
        <Route path="/employerlogin" element={<Employerlogin />} />
        <Route
          path="/employerregistration"
          element={<Employerregistration />}
        />
        <Route
          path="/employeeregistration"
          element={<Employeeregistration />}
        />
        <Route path="/employeedashboard" element={<Employeedashboard />} />
      </Routes>
    </>
  );
}

export default App;
