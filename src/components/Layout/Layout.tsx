import React, { PropsWithChildren } from "react"
import Navbar from "./Navbar"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen h-full min-w-screen w-full relative">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
