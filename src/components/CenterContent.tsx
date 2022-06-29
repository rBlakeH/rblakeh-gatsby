import React, { Component } from "react"
import { css, cx } from '@emotion/css'

type props ={
  children: any
}

const center = css`
border: 5px solid black;
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
export const CenterContent = (Props: props) => {
  const {children} = Props
  return (
    <div className={center}>
      {children}
    </div>
  )
}
