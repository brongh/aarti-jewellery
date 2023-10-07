import Col from "@/components/Flex/Col"
import { sanityClient } from "@/services/sanityClient"
import { CollectionPayload } from "@/types/queryPayloads"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await sanityClient.fetch(
    `*[_type == "collections" && archived != true]{
        "collectionId": slug.current,
        "imageUrl": image.asset->url,
        "alt": image.alt,
        name,
        description,
        "products": products[]->{
            "imageUrl": images[0].asset->url,
            "alt": images[0].alt,
            "itemId": slug.current,
            title,
            "type": _type
        }
    }`
  )

  return {
    props: {
      collections: response,
    },
  }
}

const CollectionMainPage = ({
  collections,
}: {
  collections: CollectionPayload[]
}) => {
  const router = useRouter()

  const handleProductClick = (
    e: React.MouseEvent<HTMLDivElement>,
    itemId: string,
    productType: string,
    collectionId: string
  ) => {
    e.preventDefault()
    console.log(itemId, productType)
    router.push(`/details/${productType}/${itemId}?collection=${collectionId}`)
  }

  const handleToCollection = (
    e: React.MouseEvent<HTMLHeadingElement>,
    collectionId: string
  ) => {
    e.preventDefault()
    router.push(`/collections/${collectionId}`)
  }

  return (
    <Col className="px-4 py-10 gap-20 pb-20">
      <h1 className="text-4xl text-primary text-center">Collections</h1>
      <Col className="gap-12">
        {collections.map((item, index) => {
          return (
            <Col key={item.name + index} className="gap-4">
              <div
                onClick={(e) => handleToCollection(e, item.collectionId)}
                className="cursor-pointer w-[400px] "
              >
                <h4 className="text-primary hover:text-secondary">
                  {item.name}
                </h4>
              </div>
              <div className="carousel gap-4">
                {item.products.map((product, index) => {
                  return (
                    <div
                      key={product.title + index}
                      className="w-[300px] cursor-pointer hover:shadow-lg shadow-tertiary"
                      onClick={(e) => {
                        handleProductClick(
                          e,
                          product.itemId,
                          product.type,
                          item.collectionId
                        )
                      }}
                    >
                      <img src={product.imageUrl} alt={product.alt} />
                      <h5 className="text-primary">{product.title}</h5>
                    </div>
                  )
                })}
              </div>
            </Col>
          )
        })}
      </Col>
    </Col>
  )
}

export default CollectionMainPage
