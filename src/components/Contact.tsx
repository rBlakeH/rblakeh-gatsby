import React from "react"
import { css } from "@emotion/css";
import { SectionHeader } from "./SectionHeader";
import { Content } from "./Content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome//free-brands-svg-icons'

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

    return (
        <div>
            <div className={div}>
                <SectionHeader text={"Contact"} />
            </div>
            <div className={innerDiv}>
                <h3>Email</h3>
                <a href="mailto:richardblakehampton@gmail.com">richardblakehampton@gmail.com</a>
            </div>
            <div className={innerDiv}>
                <h3>Phone</h3>
                <p>(940) 453-7217</p>

            </div>
            <div className={div}>
                <a href="https://www.linkedin.com/in/blake-hampton-b2847a192/">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" href="https://www.linkedin.com/in/blake-hampton-b2847a192/" />
                </a>
                <a href="https://github.com/rBlakeH">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                </a>
            </div>
        </div>
    )
}