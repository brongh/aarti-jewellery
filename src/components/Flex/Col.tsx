import { DivProps } from "@/types/props"
import React from "react"

const Col = ({ children, ...rest }: DivProps) => {
  return (
    <div {...rest} className={`flex flex-col ${rest.className ?? ""}`}>
      {children}
    </div>
  )
}

export default Col
