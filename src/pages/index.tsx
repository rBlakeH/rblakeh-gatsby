import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MatterHeader from "../components/MatterHeader"
import { CenterContent } from "../components/CenterContent"
import { Content } from "../components/Content"
import { Children } from "react"
import { experienceData, job } from "../components/Experience/ExperienceData"
import { Experience } from "../components/Experience/Expreience"
import { ExperienceContent } from "../components/Experience/ExperienceContent"

const IndexPage = () => {
  const contentRef = useRef<HTMLElement>()
  return (
    <CenterContent ref={contentRef}>
      <MatterHeader ref={contentRef} />
      <h1>RblakeH.com</h1>
      <ExperienceContent />
    </CenterContent>
  )
}
export default IndexPage
