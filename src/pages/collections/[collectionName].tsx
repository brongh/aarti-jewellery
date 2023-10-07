import BrowseItems from "@/components/Details/BrowseItems"
import ItemDetails from "@/components/Details/ItemDetails"

import { sanityClient } from "@/services/sanityClient"
import { urlFor } from "@/services/sanityImage"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React from "react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params
  const collectionName = params?.collectionName || ""

  if (collectionName && typeof collectionName === "string") {
    const response = await sanityClient.fetch(
      `*[_type == "collections" && slug.current == "${collectionName}"]{
            "collectionId": slug.current,
            "imageUrl": image.asset->url,
            "alt": image.alt,
            name,
            description,
            "products": products[]->{
                "images": images[]{
                    alt, caption, featured, crop, hotspot, 
                    "imageUrl": asset->url
                  },
                "alt": images[0].alt,
                "itemId": slug.current,
                title,
                "type": _type
            }
        }`
    )

    console.log(response)

    if (!response) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        collection: response[0],
        collectionName,
      },
    }
  }

  return {
    props: {},
  }
}

const CollectionsPage = ({
  collection,
  collectionName,
}: {
  collection: any
  collectionName: string
}) => {
  const router = useRouter()
  const imageData = collection.imageUrl
  const imageUrl = urlFor(imageData).dpr(2).quality(100).url()

  const handleSelectProduct = (
    e: React.MouseEvent<HTMLDivElement>,
    itemId: string,
    productType?: string
  ) => {
    e.preventDefault()
    router.push(
      `/details/${productType}/${itemId}?collection=${collectionName}`
    )
  }

  return (
    <BrowseItems
      items={collection.products}
      productName={collectionName}
      coverPhotosAlt={collection.alt}
      coverPhotosUrl={imageUrl}
      handleSelectProduct={handleSelectProduct}
    />
  )
}

export default CollectionsPage
