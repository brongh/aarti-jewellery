import HamburgerIcon from "@/icons/HamburgerIcon"
import Logo from "@/icons/logo"
import Link from "next/link"
import React, { useState } from "react"
import Col from "../Flex/Col"
import { useRouter } from "next/router"
import CloseIcon from "@/icons/CloseIcon"

const navigationOptions = [
  {
    name: "collections",
    href: "/collections",
  },
  {
    name: "rings",
    href: "/browse/rings",
  },
  {
    name: "earrings",
    href: "/browse/earrings",
  },
  {
    name: "necklaces",
    href: "/browse/necklaces",
  },
  {
    name: "bracelets",
    href: "/browse/bracelets",
  },
  {
    name: "about me",
    href: "/about",
  },
]

const Navbar = () => {
  const [showTab, setShowTab] = useState(false)
  const router = useRouter()

  const toggleTab = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement | HTMLOrSVGElement>
  ) => {
    e.preventDefault()
    setShowTab((prev) => !prev)
  }

  const handleNavOptionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = e.currentTarget.href
    setShowTab(false)
    router.push(url)
  }

  const handleNavigateToHome = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    router.push("/")
    setShowTab(false)
  }

  return (
    <>
      <div className="fixed top-0 w-full h-[65px] p-4 flex-col justify-start items-start gap-2 flex z-40 bg-white">
        <div className="relative justify-start items-center inline-flex w-full">
          <div className="w-6 h-6 absolute" onClick={toggleTab}>
            <HamburgerIcon className="hover:stroke-stone-400 cursor-pointer" />
          </div>
          <div className="flex justify-center items-center w-full">
            <div onClick={handleNavigateToHome}>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      {showTab ? (
        <Col className="bg-opacity-50 h-screen-w-screen bg-black z-50">
          <Col className="bg-white z-50 h-screen w-[250px] fixed top-0 px-8 py-4">
            <CloseIcon
              className="cursor-pointer h-8 w-8 hover:stroke-primary"
              onClick={toggleTab}
            />
            <Col className="justify-center items-start gap-4 py-8">
              {navigationOptions.map((navItem, index) => (
                <Link
                  href={navItem.href}
                  key={index}
                  onClick={handleNavOptionsClick}
                  className="text-2xl text-stone-400 hover:text-stone-500 cursor-pointer capitalize"
                >
                  {navItem.name}
                </Link>
              ))}
            </Col>
          </Col>
        </Col>
      ) : null}
    </>
  )
}

export default Navbar
