import React from "react"
import Col from "../Flex/Col"
import Row from "../Flex/Row"
import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"

const Footer = () => {
  return (
    <footer className="flex flex-col absolute bottom-0 bg-primary w-full pt-10 px-6">
      <Col className="gap-4 uppercase text-white text-base py-4">
        <a className="caption hover:text-orange-100 active:text-orange-200 cursor-pointer w-20">
          about me
        </a>
        <a className="caption hover:text-orange-100 active:text-orange-200 cursor-pointer w-20">
          contact us
        </a>
        <Col className="gap-4 mt-4">
          <p className="caption">follow us</p>
          <Row className="items-center gap-4">
            <FacebookIcon className="cursor-pointer hover:fill-orange-100 active:fill-orange-200" />
            <InstagramIcon className="cursor-pointer hover:fill-orange-100 active:fill-orange-200" />
          </Row>
        </Col>
      </Col>
      <Col className="py-4 ">
        <p className="caption text-xs text-white">
          © 2023, Aarti Sonawala, all rights reserved.
        </p>
      </Col>
    </footer>
  )
}

export default Footer
