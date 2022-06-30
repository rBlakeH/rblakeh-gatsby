import React, { Component } from "react"
import { css, cx } from '@emotion/css'

type Props ={
  children: any
  ref: any
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
export const CenterContent = (props: Props) => {
  const {children, ref} = props
  return (
    <div className={center} ref={ref}>
      {children}
    </div>
  )
}
