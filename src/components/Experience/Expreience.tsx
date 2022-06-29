import React from "react"
import { job } from "./ExperienceData"

type props = {
    job: job
}

export const Experience = (Props: props) => {
    const {job} = Props;
    return(
        <div>
            <h1>{job.company}</h1>
            <p>{job.dates}</p>
            <p>{job.title}</p>
            <p>{job.description}</p>
        </div>
    )
}