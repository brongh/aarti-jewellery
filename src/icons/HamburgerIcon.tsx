import { IconProps } from "@/types/props"
import React from "react"

const HamburgerIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      className={` w-6 h-[25px] stroke-[#6B705C] ${className ?? ""}`}
    >
      <path d="M3 12.5H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6.5H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18.5H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default HamburgerIcon
