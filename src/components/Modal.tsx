import React from "react"
import Col from "./Flex/Col"

type ModalProps = {
  show?: boolean
  contentClassName?: string
} & React.HTMLProps<HTMLDivElement>

const Modal = ({ show, children, contentClassName, ...rest }: ModalProps) => {
  const { className } = rest
  return (
    <Col
      className={`fixed inset-0 items-center justify-center ${
        show ? "" : "hidden"
      } z-50 h-screen w-screen bg-light-text-black bg-black bg-opacity-40 px-4 backdrop-blur-sm ${
        className ?? ""
      }`}
    >
      <div
        className={`w-[410px] md:w-4/5 max-w-[840px] bg-white p-6 ${
          contentClassName ?? ""
        }`}
      >
        {children}
      </div>
    </Col>
  )
}

export default Modal
