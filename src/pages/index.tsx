import * as React from "react"
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
  return (
    <CenterContent>
      <h1>HELLO World IAM RUNNING</h1>
      {/* <Content></Content> */}
      {/* {experienceData.map(x => <Experience  job={x}/>)} */}
      {/* <Experience job={job1} ></Experience> */}
      <ExperienceContent />
    </CenterContent>
  )
}
export default IndexPage
