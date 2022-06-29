import { Content } from "../Content"
import { experienceData } from "./ExperienceData"
import { Experience } from "./Expreience"
import React from "react"

export const ExperienceContent = () => (
    <React.Fragment>
        {
            experienceData.map(x =>
                <Content right={(<Experience job={x}></Experience>)} left={"HELLLLOOO"} isRight={false} />)

        }
    </React.Fragment>
)
