import { Content } from "../Content"
import React from "react"
import { projectsData } from "./ProjectsData"
import { Projcet } from "./Projcet"

export const ProjecetContent = () => (
    <React.Fragment>
        {
            projectsData.map((p, i) =>
                (i + 1) % 2 ? <Content right={(<Projcet projcet={p}/>)} left={null} />
                    : <Content right={null} left={(<Projcet projcet={p}/>)} />
            )           
        }
    </React.Fragment>
)
