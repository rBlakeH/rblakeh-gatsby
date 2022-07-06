import { Content } from "../Content"
import React from "react"
import { Education } from "./Education"
import { CenterImage } from "../CenterImage"

export const EducationContent = () => (
    <React.Fragment>
        <Content
            right={(<Education />)}
            left={<CenterImage imagePath="/images/ec.jpg" />}
        />
    </React.Fragment>
)
