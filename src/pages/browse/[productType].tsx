import Col from "@/components/Flex/Col"
import { sanityClient } from "@/services/sanityClient"
import { ProductPayload } from "@/types/queryPayloads"
import { GetServerSideProps } from "next"
import React from "react"

import Img from "next/image"
import { urlFor } from "@/services/sanityImage"
import { getImageDimensions } from "@sanity/asset-utils"
import { useRouter } from "next/router"
import BrowseItems from "@/components/Details/BrowseItems"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params
  const productType = params?.productType || ""

  if (productType) {
    if (
      productType === "rings" ||
      productType === "necklaces" ||
      productType === "earrings" ||
      productType === "bracelets"
    ) {
      const response = await sanityClient.fetch(`*[_type == "${productType}"]{
        title, description,
        "itemId": slug.current,
        "images": images[]{
          alt, caption, featured, crop, hotspot, 
          "imageUrl": asset->url
        }
      }`)
      const coverPhotosResponse = await sanityClient.fetch(
        `*[_type == "coverPhotos" && productName == "${productType}"] {
          productName,
          images[] {
            alt, featured, 
            "imageUrl": asset->{
              ...,
              metadata
            }
          }
        }`
      )
      return {
        props: {
          items: response,
          coverPhotos: coverPhotosResponse,
          productName: productType,
        },
      }
    } else {
      return {
        notFound: true,
      }
    }
  }

  return {
    props: {},
  }
}

const ProductPage = (props: {
  items: ProductPayload[]
  coverPhotos: any
  productName: string
}) => {
  const { items, coverPhotos, productName } = props
  const imageData = coverPhotos[0].images[0].imageUrl ?? ""
  const imageUrl = urlFor(imageData).dpr(2).quality(100).url()

  const router = useRouter()

  const handleSelectProduct = (
    e: React.MouseEvent<HTMLDivElement>,
    itemId: string
  ) => {
    e.preventDefault()
    router.push(`/details/${productName}/${itemId}`)
  }

  return (
    <BrowseItems
      items={items}
      productName={productName}
      coverPhotosAlt={coverPhotos[0].images[0].alt}
      coverPhotosUrl={imageUrl}
      handleSelectProduct={handleSelectProduct}
    />
  )
}

export default ProductPage
