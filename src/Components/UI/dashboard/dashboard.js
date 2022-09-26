import React from 'react'
import { Dashboardnavbar } from "../navbar";
import {JobCard} from "./jobCard"

export const Dashboard = () => {
  return (
    <>
    <Dashboardnavbar />
    <hr />
    <JobCard/>
    </>
  )
}
