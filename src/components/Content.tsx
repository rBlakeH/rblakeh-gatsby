import React, { Children, Component } from "react"
import { css, cx } from '@emotion/css'

type props = {
    isRight: boolean,
    right: any,
    left: any
}

export const Content = (Props: props) => {
    const contentDiv = css`
    display: inline-block;
    border: 5px solid red;
    width: 50%;
    @media (max-width: 481px){
        display: block;
        width: 100%;
    }
    `
    return (
        <>
            <div className={contentDiv}>{Props.right}</div>
            <div className={contentDiv}>{Props.left}</div>
        </>
    )
}