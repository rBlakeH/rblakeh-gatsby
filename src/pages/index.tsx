import React, { useRef, useState } from "react"

import MatterHeader from "../components/MatterHeader"
import { CenterContent } from "../components/CenterContent"
import { ExperienceContent } from "../components/Experience/ExperienceContent"

const IndexPage = () => {
  return (
    <CenterContent>
      <MatterHeader/>
      <h1>RblakeH.com</h1>
      <ExperienceContent />
    </CenterContent>
  )
}
export default IndexPage
