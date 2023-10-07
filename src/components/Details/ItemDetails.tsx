import React, { useState } from "react"
import Col from "../Flex/Col"
import Row from "../Flex/Row"
import Carousel from "../Carousel"
import { ProductPayload } from "@/types/queryPayloads"
import { urlFor } from "@/services/sanityImage"
import Modal from "../Modal"
import CloseIcon from "@/icons/CloseIcon"
import { useRouter } from "next/router"
import Image from "next/image"

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
  showModal?: boolean
  toggleModal: () => void
}

const ItemDetails = ({
  handleNavigateToHome,
  handleNavigateToBrowse,
  handleNavigateToItem,
  item,
  productName,
  otherProducts,
  collectionName,
  showModal,
  toggleModal,
}: ItemDetailsProps) => {
  const [message, setMessage] = useState("")
  const [input, setInput] = useState({
    email: "",
    name: "",
  })
  const router = useRouter()

  const handleCloseModalIcon = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    toggleModal()
  }

  const handleEnquiryButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setMessage(
      `I am interested in the product listed in:\n\n${window.location}\n\nPlease contact me by email`
    )
    toggleModal()
  }

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget
    setMessage(value)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Modal show={showModal}>
        <Col>
          <form onSubmit={handleSubmit}>
            <Row className="w-full justify-end">
              <div onClick={handleCloseModalIcon} className="cursor-pointer">
                <CloseIcon />
              </div>
            </Row>
            <Col className="pb-16">
              <h2 className="text-primary">Send us a message for enquiry</h2>
            </Col>
            <Col className="gap-6 items-center text-primary">
              <div className="grid grid-cols-2 gap-4 w-full">
                <input
                  className="input input-bordered w-full max-w-xs bg-transparent "
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={input.name}
                  onChange={handleInput}
                />
                <input
                  className="input input-bordered w-full max-w-xs bg-transparent"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                />
              </div>
              <textarea
                className="textarea textarea-bordered bg-transparent w-full"
                placeholder="Message"
                rows={5}
                onChange={handleMessage}
                value={message}
              />
              <div className="h-6" />
              <button className="btn btn-filled w-1/2" type="submit">
                Send
              </button>
            </Col>
          </form>
        </Col>
      </Modal>
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
        <Col className="lg:flex-row lg:h-full lg:items-center items-center lg:gap-16 lg:px-20">
          <div className="w-full sm:w-4/5 lg:basis-2/3">
            <Carousel items={item.images} />
          </div>
          <div className="h-12 lg:hidden" />
          <Col className="lg:justify-center h-full lg:basis-1/3 w-full">
            <Col className="px-6 w-full gap-10">
              <Col className="gap-4 w-full">
                <h2 className="header2 text-primary capitalize">
                  {item.title}
                </h2>
                <p className="body2 text-primary">{item.metadata}</p>
              </Col>
              <button
                className="btn btn-filled border-0 rounded-none"
                onClick={handleEnquiryButton}
              >
                ENQUIRE NOW
              </button>
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
          </Col>
          <div className="h-12 lg:hidden" />
        </Col>

        <Col className="px-4 gap-4 w-full lg:mt-20">
          <h3 className="text-primary">Other {productName} you might like</h3>
          <div className="carousel gap-4">
            {otherProducts
              ? otherProducts.map((item, index) => {
                  return (
                    <Col
                      className="carousel-item gap-1 cursor-pointer hover:shadow-xl shadow-tertiary w-[180px]"
                      key={item.title + index}
                      onClick={(e) => handleNavigateToItem(e, item.itemId)}
                    >
                      <div>
                        <img
                          src={urlFor(item.images[0].imageUrl)
                            .dpr(2)
                            .quality(100)
                            .url()}
                          className="w-[160px] h-[248px] lg:w-[280px] lg:h-[280px]"
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
      </Col>
    </>
  )
}

export default ItemDetails
