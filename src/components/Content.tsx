import React, { Children, Component } from "react"
import { css, cx } from '@emotion/css'

type props = {
    right: any,
    left: any
}

export const Content = (Props: props) => {
    
    const div = css`
    border: 5px solid blue;
    // display flex;
    // align-items: center;
    // align-content: center;
    // // height: 300px
    `

    const contentDiv = css`
    margin-top: 10%;
    align-items: baseline;
    display: inline-block;
    // border: 5px solid red;
    width: 50%;
    @media (max-width:  768px){
        display: block;
        width: 100%;
    }
    `
    return (
        <div className={div}>
            <div className={contentDiv}>{Props.right}</div>
            <div className={contentDiv}>{Props.left}</div>
        </div>
    )
}