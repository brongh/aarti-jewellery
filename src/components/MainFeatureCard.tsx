import React from "react"
import Col from "./Flex/Col"

type MainFeatureCardProps = {
  name: string
  description: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  buttonText: string
  slug: string
}

const MainFeatureCard = ({
  name,
  description,
  onClick,
  buttonText,
  slug,
}: MainFeatureCardProps) => {
  return (
    <Col className="justify-center items-center w-full md:items-start mb-6 md:mb-16 md:ml-16">
      <Col className="gap-4 md:gap-10 items-center justify-center mx-6 max-w-[400px]">
        <Col className="gap-1 md:gap-4 text-center md:text-left md:pl-0 px-4">
          <p className="subtitle1 text-white">{name}</p>
          <p className="body2 text-white">{description}</p>
        </Col>
        <button
          className="btn btn-filled w-full text-base"
          name={slug}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </Col>
    </Col>
  )
}

export default MainFeatureCard
