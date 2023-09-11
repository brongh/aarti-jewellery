import React, { PropsWithChildren } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen h-full min-w-screen w-full relative">
      <Navbar />
      <div className="mt-[64px] overflow-hidden">{children}</div>
      <div className="h-[280px]" />
      <Footer />
    </div>
  )
}

export default Layout
