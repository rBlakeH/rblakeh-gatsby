import { css } from "@emotion/css";
import React from "react"
import { project } from "./ProjectsData";

type props = {
    projcet: project
}

export const Projcet = ({ projcet: { title, name, icon, description, links } }: props) => {

    return (
        <>
            <div>
                <img src={icon} width="60" height="60" />
                <h1 >{title}</h1>
                <h2>{name}</h2>
                <p>{description}</p>
                {links?.map(l => (<a href={l.href} >{l.text}</a>))}
            </div>
        </>
    )
}