import React from "react"
import Col from "../Flex/Col"
import Image from "next/image"
import { ProductPayload } from "@/types/queryPayloads"
import { urlFor } from "@/services/sanityImage"
import { getImageDimensions } from "@sanity/asset-utils"

type BrowseItemsProps = {
  items: ProductPayload[]
  productName: string
  coverPhotosAlt: string
  coverPhotosUrl: string
  handleSelectProduct: (
    e: React.MouseEvent<HTMLDivElement>,
    itemId: string,
    type?: string
  ) => void
}

const BrowseItems = ({
  items,
  productName,
  coverPhotosUrl,
  coverPhotosAlt,
  handleSelectProduct,
}: BrowseItemsProps) => {
  return (
    <Col className="w-full min-h-screen pb-20 gap-4">
      <Col className="w-screen h-[200px] md:h-[300px] lg:h-[450px] relative">
        <Image
          src={coverPhotosUrl}
          alt={coverPhotosAlt}
          fill
          objectFit={"cover"}
        />
        <Col className="absolute w-full items-center bottom-0 h-full bg-gradient-to-t from-black to-transparent opacity-30"></Col>
        <Col className="absolute w-full items-center bottom-0 h-32 hidden md:flex">
          <h2 className="text-white uppercase">{productName}</h2>
          <p className="subtitle2 text-white">{}</p>
        </Col>
      </Col>
      <Col className="items-center justify-center py-6 md:hidden">
        <h2 className="uppercase header2 text-primary">{productName}</h2>
      </Col>
      <Col className="p-4 gap-3">
        <p className="subtitle2 text-primary">{items.length} Products</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items?.map((item, index) => {
            return (
              <Col
                key={index + item.title}
                className="gap-2 shadow p-2 cursor-pointer group hover:shadow-lg shadow-tertiary mb-4"
                onClick={(e) => handleSelectProduct(e, item.itemId, item.type)}
              >
                <Col className="">
                  <Image
                    src={urlFor(item.images[0].imageUrl)
                      .dpr(2)
                      .quality(100)
                      .url()}
                    alt={item.images[0].alt}
                    width={getImageDimensions(item.images[0].imageUrl).width}
                    height={getImageDimensions(item.images[0].imageUrl).height}
                  />
                </Col>
                <Col>
                  <p className="body1 text-primary group-hover:text-black capitalize">
                    {item.title}
                  </p>
                </Col>
              </Col>
            )
          })}
        </div>
      </Col>
      <div className="h-20" />
    </Col>
  )
}

export default BrowseItems
