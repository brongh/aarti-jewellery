import React from "react"
import Col from "../Flex/Col"
import Img from "next/image"
import { urlFor } from "@/services/sanityImage"
import { getImageDimensions } from "@sanity/asset-utils"

export type ImageCardProps = {
  imageData: any
  alt: string
} & React.HTMLProps<HTMLDivElement>

const Megatron = ({ imageData, alt, children }: ImageCardProps) => {
  console.log(imageData)
  const imageUrl = urlFor(imageData).dpr(2).quality(100).url()
  const blurUrl = urlFor(imageData).width(20).quality(20).url()
  return (
    <Col className="relative w-screen h-[440px] md:h-[540px] flex-reverse">
      <Img
        src={imageUrl}
        width={getImageDimensions(imageData).width}
        height={getImageDimensions(imageData).height}
        alt={alt}
        className="w-screen h-[440px] md:h-[540px]"
        blurDataURL={blurUrl}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute bg-gradient-to-t from-black to-transparent opacity-50 z-20 w-full h-full" />
      <div className="z-30 absolute bottom-0 w-full">{children}</div>
    </Col>
  )
}

export default Megatron
