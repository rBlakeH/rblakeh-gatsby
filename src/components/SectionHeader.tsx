import React, { Component } from "react"
import { css, cx } from '@emotion/css'
type  Props = {
    text: string
}

export const SectionHeader = ({text}: Props) =>{
    // const div = css`
    //     display: flex;
    //     justify-content: flex-start;;
    //     h1{
    //         font-size: 5vw;
    //     }
    // `
    return(
        <div>
            <h1>{text}</h1>
        </div>
    )
}