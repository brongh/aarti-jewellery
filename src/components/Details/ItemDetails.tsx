import React from "react"
import Col from "../Flex/Col"
import Row from "../Flex/Row"
import Carousel from "../Carousel"
import { ProductPayload } from "@/types/queryPayloads"
import { urlFor } from "@/services/sanityImage"

type ItemDetailsProps = {
  handleNavigateToHome: (e: React.MouseEvent<HTMLParagraphElement>) => void
  handleNavigateToBrowse: (e: React.MouseEvent<HTMLParagraphElement>) => void
  handleNavigateToItem: (
    e: React.MouseEvent<HTMLDivElement>,
    itemId: string
  ) => void
  item: ProductPayload
  productName: string
  otherProducts?: ProductPayload[]
  collection?: string
  collectionName?: string
}

const ItemDetails = ({
  handleNavigateToHome,
  handleNavigateToBrowse,
  handleNavigateToItem,
  item,
  productName,
  otherProducts,
  collectionName,
}: ItemDetailsProps) => {
  return (
    <Col className="min-h-screen h-full w-full bg-white items-center pt-2 pb-20 gap-4">
      <Row className="w-full px-4 gap-1 capitalize">
        <p
          className="subtitle2 text-secondary cursor-pointer hover:text-primary"
          onClick={handleNavigateToHome}
        >
          Home
        </p>
        <p className="subtitle2 text-secondary">/ </p>
        <p
          className="subtitle2 text-secondary cursor-pointer hover:text-primary"
          onClick={handleNavigateToBrowse}
        >
          {collectionName ? collectionName : productName}
        </p>
        <p className="subtitle2 text-secondary">/ </p>
        <span className="text-primary hover:text-black cursor-pointer subtitle2">
          {item.title}
        </span>
      </Row>
      <div className="w-full sm:w-4/5">
        <Carousel items={item.images} />
      </div>
      <div className="h-12" />
      <Col className="px-6 w-full gap-10">
        <Col className="gap-4 w-full">
          <h2 className="header2 text-primary capitalize">{item.title}</h2>
          <p className="body2 text-primary">{item.metadata}</p>
        </Col>
        <button className="btn btn-filled">ENQUIRE NOW</button>
        <Col className="gap-4">
          <Col className="p-2 border-b-1 border-secondary">
            <h3 className="header2 text-primary text-base font-bold">
              DETAILS
            </h3>
          </Col>
          <p className="body2 text-primary">{item.description}</p>
        </Col>
      </Col>
      <div className="h-12" />
      <Col className="px-4 gap-4 w-full">
        <h3 className="text-primary">Other {productName} you might like</h3>
        <div className="carousel gap-4">
          {otherProducts
            ? otherProducts.map((item, index) => {
                return (
                  <Col
                    className="carousel-item gap-1 cursor-pointer hover:shadow-xl w-[180px]"
                    key={item.title + index}
                    onClick={(e) => handleNavigateToItem(e, item.itemId)}
                  >
                    <div>
                      <img
                        src={urlFor(item.images[0].imageUrl)
                          .dpr(2)
                          .quality(100)
                          .url()}
                        width={160}
                        height={248}
                        alt={item.images[0].alt}
                      />
                    </div>
                    <p className="body2 text-primary capitalize">
                      {item.title}
                    </p>
                  </Col>
                )
              })
            : null}
        </div>
      </Col>
      <div className="h-12" />
    </Col>
  )
}

export default ItemDetails
