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
import Header from "../components/header"
import { Title } from "../components/Experience/Title"
import { SectionHeader } from "../components/SectionHeader"
import { Education } from "../components/Education/Education"
import { EducationContent } from "../components/Education/EducationContent"
import { ProjecetContent } from "../components/Projects/ProjectContent"
import { Contact } from "../components/Contact"
// import { BallPit } from "../components/BallPit"

const IndexPage = () => {
  const contentRef = useRef<HTMLElement>()
  return (
    <>
     <MatterHeader ref={null} />
      {/* <BallPit/> */}
      <Title />
      <SectionHeader text={"Experience"} />
      <CenterContent ref={contentRef}>
        <ExperienceContent />
      </CenterContent>
      <SectionHeader text={"Education"} />
      <CenterContent ref={contentRef}>
        <EducationContent/>
      </CenterContent>
      <SectionHeader text={"Projects"} />
      <CenterContent ref={contentRef}>
        <ProjecetContent/>
      </CenterContent>
      <CenterContent ref={contentRef}>
        <Contact/>
      </CenterContent>
    </>
  )
}
export default IndexPage
