import { DivProps } from "@/types/props"
import React from "react"

const Row = ({ children, ...rest }: DivProps) => {
  return (
    <div {...rest} className={`flex flex-row ${rest.className ?? ""}`}>
      {children}
    </div>
  )
}

export default Row
