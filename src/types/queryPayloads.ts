import { ImageType } from "./images"

export type ProductPayload = {
  description: string
  title: string
  images: ImageType[]
  itemId: string
  metadata: string
  type?: string
}

export type CollectionPayload = {
  collectionId: string
  alt: string
  description: string
  imageUrl: string
  name: string
  products: ProductListingPayload[]
}

export type ProductListingPayload = {
  alt: string
  imageUrl: string
  itemId: string
  title: string
  type: string
}
