import React, { PropsWithChildren } from "react"
import { css } from "@emotion/css"

type Props = {}

export const CenterContent = ({ children }: PropsWithChildren<Props>) => (
  <div
    css={css`
      border: 5px solid black;
      margin: auto;
      width: 100%;

      @media (min-width: 480px) {
        width: 416px;
      }

      @media (min-width: 768px) {
        width: 704px;
      }

      @media (min-width: 1024px) {
        width: 960px;
      }

      @media (min-width: 1500px) {
        width: 1436px;
      }
    `}
  >
    {children}
  </div>
)
