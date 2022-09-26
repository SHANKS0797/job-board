import React from "react";
import { jobData } from "../jobData";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { EmpDashboardNav } from "../navbar";

export const Employeedashboard = () => {
  return (
    <>
      <EmpDashboardNav />
      {jobData.map((data, key) => {
        return (
          <div className="container" key={key}>
            <div className="header">
              <div className="company-title">
                <p>{data.companyTitle}</p>
              </div>
            </div>
            <div className="job-title">
              <h4>{data.jobTitle}</h4>
            </div>
            <div className="job-description">
              <p>{data.jobDescription}</p>
            </div>
            <div className="faint-text">
              <LocationOnIcon className="location" />
              <p>{data.jobLocation}</p>
            </div>
            <div className="faint-text">
              <WorkIcon />
              <p>{data.type}</p>
            </div>
            <div className="faint-text">
              <p>{data.postingDate}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
