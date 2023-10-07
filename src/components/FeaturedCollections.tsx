import { HomeCollectionsPayload } from "@/dtos/collections"
import React from "react"
import Col from "./Flex/Col"
import Megatron from "./Megatron.tsx/Megatron"

type FeaturedCollectionsProps = {
  collections: HomeCollectionsPayload[]
  onClick: (e: React.MouseEvent<HTMLButtonElement>, slug: string) => void
}

const FeaturedCollections = ({
  collections,
  onClick,
}: FeaturedCollectionsProps) => {
  return (
    <Col className="py-12 gap-6 w-full items-center justify-center">
      <h4 className="text-primary">Featured Collections</h4>
      <Col className="w-full">
        {collections.map(({ name, image, alt, slug }, index) => {
          return (
            <Megatron imageData={image} key={name + index} alt={alt}>
              <Col className="justify-center items-center w-full mb-6">
                <button
                  onClick={(e) => onClick(e, slug.current)}
                  name={slug.current}
                  className="border-b-1 border-white py-1 group hover:border-red-300 cursor-pointer active:border-red-200"
                >
                  <p className="subtitle1 text-white uppercase font-light group-hover:text-red-300 group-hover:font-normal group-active:text-red-200">
                    {name}
                  </p>
                </button>
              </Col>
            </Megatron>
          )
        })}
      </Col>
    </Col>
  )
}

export default FeaturedCollections
