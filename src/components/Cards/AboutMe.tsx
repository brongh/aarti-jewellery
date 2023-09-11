import React from "react"
import Col from "../Flex/Col"
import Img from "next/image"
import { urlFor } from "@/services/sanityImage"
import { getImageDimensions } from "@sanity/asset-utils"

export type AboutMeCardProps = {
  imageData: any
  alt: string
  title: string
  description: string
}

const AboutMeCard = ({
  imageData,
  alt,
  title,
  description,
}: AboutMeCardProps) => {
  const imageUrl = urlFor(imageData).dpr(2).quality(100).url()
  const blurUrl = urlFor(imageData).width(20).quality(20).url()
  return (
    <Col className="p-6 w-full max-w-[440px] items-center">
      <Col className="w-full  h-[400px]">
        <Img
          src={imageUrl}
          width={getImageDimensions(imageData).width}
          height={getImageDimensions(imageData).height}
          alt={alt}
          className="w-full h-full"
          blurDataURL={blurUrl}
          style={{
            objectFit: "cover",
          }}
        />
      </Col>
      <Col className="my-12 gap-4">
        <Col className="px-3 text-primary gap-1 text-center">
          <h4>{title}</h4>
          <p className="body2">{description}</p>
        </Col>
        <button className="btn btn-outline">read more</button>
      </Col>
    </Col>
  )
}

export default AboutMeCard
