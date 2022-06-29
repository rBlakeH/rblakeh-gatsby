import React, { Component } from "react"
import { css, cx } from '@emotion/css'

const center = css`
background: red;
margin: auto;
width: 100%;
@media (min-width: 480px){
  width: 416px;
}
@media (min-width: 768px){
  width: 704px;
}
@media (min-width: 1024px){
  width: 960px;
}
@media (min-width: 1500px){
  width: 1436px;
}
`
export const CenterContent = ({ children }) => {
  return (
    <div className={center}>
      {children}
    </div>
  )
}
