import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react"
import { job } from "./ExperienceData"

type props = {
    job: job
}

export const Experience = (Props: props) => {
    const { job } = Props;
    return (
        <div>
            <img src={job.icon} width="60" height="60" alt={job.alt} />
            <h1>{job.company}</h1>
            <p>{job.dates}</p>
            <p>{job.title}</p>
            <p>{job.description}</p>
        </div>
    )
}