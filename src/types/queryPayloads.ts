import { ImageType } from "./images"

export type ProductPayload = {
    description: string
    title: string
    images: ImageType[]
}