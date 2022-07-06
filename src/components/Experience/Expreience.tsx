import { css } from "@emotion/css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react"
import { job } from "./ExperienceData"

type props = {
	job: job
}

export const Experience = (Props: props) => {
	const { job } = Props;
	const div = css`
    display: flex;
    align-items: center;

		img, h1, h2, p {
			margin: 5px;
		}
		small, p {
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		}
		small{
			font-size: .8em;
		}

		h2, p{
			margin-left: 10px;
		}
		`
	const item = css`
	
		`
	return (
		<>
			<div className={div}>
				<img src={job.icon} width="60" height="60" alt={job.alt} />
				<h1 className={item}>{job.company}</h1>
			</div>
			<div className={div}>
				<h2> {job.title}</h2>
				<p ><small><i>{job.dates}</i></small></p>
			</div>
			<div className={div}>
				<p>{job.description}</p>
			</div>
		</>
	)
}