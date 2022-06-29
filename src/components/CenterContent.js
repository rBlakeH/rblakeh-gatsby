import React, { Component } from "react"
import { css, cx } from '@emotion/css'

const balls = css`
background: red;
margin: auto;
@media (min-width: 1201px){
  width: 60%;
}
@media (min-width: 1025px){
  width: 70%;
}
@media (min-width: 769px){
  width: 80%;
}
@media (min-width: 481px){
  width: 90%;
}
@media (min-width: 320px){
  width: 100%;
}
`

export const CenterContent = ({children}) => {
  return (
    <>
      <div className={balls}>
        <p>THIS IS A TEST</p>
        {children}
      </div>
    </>
  )
}
