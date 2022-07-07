import React from "react"
import { css } from "@emotion/css";
import { SectionHeader } from "./SectionHeader";
import { Content } from "./Content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
    const div = css`
        display: flex;
        justify-content: center;
        * {
        margin: 10px;
        }
    `
    const innerDiv = css`
        margin-top: 0px;
        text-align: center;
    `
    const a = css`
        color: inherit;
    `

    return (
        <div>
            <div className={div}>
                <SectionHeader text={"Contacts"} />
            </div>
            <div className={div}>
                
                <a href="https://www.linkedin.com/in/blake-hampton-b2847a192/" className={a}>
                    <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                </a>
                <a href="mailto:richardblakehampton@gmail.com" className={a}>
                    <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                </a>
                <a href="https://github.com/rBlakeH" className={a}>
                    <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                </a>
            </div>
        </div>
    )
}