import { urlFor } from "@/services/sanityImage"
import { ImageType } from "@/types/images"
import { useRouter } from "next/router"
import React, { useState } from "react"

type CarouselProps = {
  items: ImageType[]
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(1)
  const router = useRouter()

  const toggleImage = (
    e: React.MouseEvent<HTMLAnchorElement>,
    image: number
  ) => {
    e.preventDefault()
    router.push(`#item${image}`, undefined, {
      shallow: true,
    })
    setCurrentImage(image)
  }

  return (
    <>
      <div className="carousel w-full">
        {items.map((item, index) => {
          const itemsNumber = index + 1
          return (
            <div
              id={`item${itemsNumber}`}
              className="carousel-item w-full"
              key={index}
            >
              <img
                src={urlFor(item.imageUrl).dpr(2).quality(100).url()}
                className="w-full"
                alt={item.alt}
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {items.map((_, index) => {
          const itemsNumber = index + 1
          return (
            <a
              href={`#item${itemsNumber}`}
              className={`rounded-full w-3 h-3 border-1 border-primary ${
                currentImage === itemsNumber ? "bg-primary" : ""
              }`}
              key={index}
              onClick={(e) => toggleImage(e, itemsNumber)}
            ></a>
          )
        })}
      </div>
    </>
  )
}

export default Carousel
