import { sanityClient } from "@/services/sanityClient"
import { ProductPayload } from "@/types/queryPayloads"
import { GetServerSideProps } from "next"
import React from "react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params
  const productType = params?.productType || ""
  console.log("productType: ", productType)
  if (productType) {
    if (
      productType === "rings" ||
      productType === "necklaces" ||
      productType === "earrings" ||
      productType === "bracelets"
    ) {
      const response = await sanityClient.fetch(`*[_type == "${productType}"]{
        title, description, 
        "images": images[]{
          alt, caption, featured, crop, hotspot, 
          "imageUrl": asset->url
        }
      }`)
      return {
        props: {
          items: response,
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

const ProductPage = (props: { items: ProductPayload[] }) => {
  const { items } = props
  console.log(items)
  return <div>ProductPage</div>
}

export default ProductPage
