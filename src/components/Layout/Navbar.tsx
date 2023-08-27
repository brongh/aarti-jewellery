import React from "react"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 border-2 border-black lg:h-32 flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <h1>Aarti</h1>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center"></div>
    </nav>
  )
}

export default Navbar
