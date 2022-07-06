import React, { Component } from "react"
import { css, cx } from '@emotion/css'
type props = {
    imagePath: string
}

export const CenterImage = ({imagePath}: props) => {

    const div = css`
        display: flex;
        width: 100%;
        justify-content: center;
    `

    return(
        <div className={div}>
            <img src={imagePath} style={{margin: 'auto', justifyContent: 'center'}} width="auto" height="auto" alt={null} />
        </div>
    )
} 