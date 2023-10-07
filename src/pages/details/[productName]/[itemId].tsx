import ItemDetails from "@/components/Details/ItemDetails"
import { sanityClient } from "@/services/sanityClient"
import { ProductPayload } from "@/types/queryPayloads"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React from "react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params
  const itemId = params?.itemId || ""
  const productName = params?.productName || ""
  const query = context.query

  if (
    itemId &&
    typeof itemId === "string" &&
    productName &&
    typeof productName === "string"
  ) {
    const response =
      await sanityClient.fetch(`*[_type == "${productName}" && slug.current == "${itemId}"]{
            title, description,
            "itemId": slug.current,
            metadata,
            "images": images[]{
              alt, caption, featured, crop, hotspot, 
              "imageUrl": asset->url
            }
          }`)
    if (!response) {
      return {
        notFound: true,
      }
    }

    const otherProductsResponse =
      await sanityClient.fetch(`*[_type == "${productName}"]{
      title, description,
      "itemId": slug.current,
      "images": images[]{
        alt, caption, featured, crop, hotspot, 
        "imageUrl": asset->url
      }
    }`)

    return {
      props: {
        item: response[0],
        productName,
        otherProducts: otherProductsResponse,
        collection: query?.collection || null,
      },
    }
  }

  return {
    props: {},
  }
}

const ProductDetailsPage = (props: {
  item: ProductPayload
  productName: string
  otherProducts: ProductPayload[]
  collection: string
}) => {
  const { item, productName, otherProducts, collection } = props

  const parsedCollectionName = collection?.split("-").join(" ")
  const router = useRouter()
  const handleNavigateToBrowse = (
    e: React.MouseEvent<HTMLParagraphElement>
  ) => {
    e.preventDefault()
    router.push(
      collection ? `/collections/${collection}` : `/browse/${productName}`
    )
  }

  const handleNavigateToHome = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault()
    router.push(`/`)
  }

  const handleNavigateToItem = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    e.preventDefault()
    router.push(`/details/${productName}/${id}`)
  }

  return (
    <ItemDetails
      handleNavigateToBrowse={handleNavigateToBrowse}
      handleNavigateToHome={handleNavigateToHome}
      handleNavigateToItem={handleNavigateToItem}
      item={item}
      productName={productName}
      otherProducts={otherProducts}
      collectionName={parsedCollectionName}
    />
  )
}

export default ProductDetailsPage
