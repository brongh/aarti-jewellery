import HamburgerIcon from "@/icons/HamburgerIcon"
import Logo from "@/icons/logo"
import React from "react"

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-[65px] p-4 flex-col justify-start items-start gap-2 flex z-50 bg-white">
      <div className="relative justify-start items-center inline-flex w-full">
        <div className="w-6 h-6 absolute">
          <HamburgerIcon className="hover:stroke-stone-400 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center w-full">
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Navbar
