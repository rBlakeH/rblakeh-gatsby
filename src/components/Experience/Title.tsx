import React, { Component } from "react"
import { css, cx } from '@emotion/css'

export const Title = () =>{
    const div = css`
        display: flex;
        height: 50vh;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 10vw;
        }
    `
    return(
        <div className={div}>
            <h1>rBlakeH.com</h1>
        </div>
    )
}