import { Content } from "../Content"
import { experienceData } from "./ExperienceData"
import { Experience } from "./Expreience"
import React from "react"
import MatterHeader from "../MatterHeader"

export const ExperienceContent = () => (
    <React.Fragment>
        {
            experienceData.map((x, i) =>
                (i + 1) % 2 ? <Content right={(<Experience job={x}></Experience>)} left={null} />
                    : <Content right={null} left={(<Experience job={x}></Experience>)} />
            )           
        }
    </React.Fragment>
)
