import React, { Component } from "react"
import { css, cx } from '@emotion/css'
type props = {
    imagePath: string
}

export const CenterImage = ({imagePath}: props) => {

    const div = css`
        // border: 5px solid yellow;
        display: flex;
        width: 100%;
        justify-content: center;
        
        img {
            width: 90%;
            border-radius: 10px;
        }
    `

    return(
        <div className={div}>
            <img src={imagePath} style={{margin: 'auto', justifyContent: 'center'}} width="auto" height="auto" alt={null} />
        </div>
    )
} 