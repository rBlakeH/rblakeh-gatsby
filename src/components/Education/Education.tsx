import React, { Component } from "react"
import { css, cx } from '@emotion/css'
import { educationData } from "./EducationData"

export const Education = () => {
    const { school,
        major,
        date,
        courses,
        electives,
        clubs } = educationData;

    const div = css`
        p{
		      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        `

    return (
        <div className={div}>
            <h1>{school}</h1>
            <h2>{major}</h2>
            <p><strong>Core Studies (GPA 3.6) - </strong>{courses}</p>
            <p><strong>Elective Courses - </strong>{electives}</p>
            <p><strong>Clubs and Leadership - </strong>{clubs}</p>
        </div>
    )
}