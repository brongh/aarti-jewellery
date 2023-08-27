export type ImageType = {
    alt: string
    caption?: string
    crop?: SanityCrop
    hotspot?: SanityHotSpot
    imageUrl: string
    featured: boolean
}

export type SanityCrop = {
    top: number
    bottom: number
    left: number
    right: number
}
export type SanityHotSpot = {
    x: number
    y: number
    height: number
    width: number
}