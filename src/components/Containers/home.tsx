import { HomeCollectionsPayload } from "@/dtos/collections"
import React from "react"
import Col from "../Flex/Col"
import Megatron from "../Megatron.tsx/Megatron"
import FeaturedCollections from "../FeaturedCollections"
import MainFeatureCard from "../MainFeatureCard"
import { AboutMeDTO } from "@/dtos/aboutMe"
import AboutMeCard from "../Cards/AboutMe"

type HomeContainerProps = {
  collections: HomeCollectionsPayload[]
  handleOtherCollectionClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  mainFeaturedCollection: HomeCollectionsPayload
  handleMainClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  aboutMePayload: AboutMeDTO
}

const HomeContainer = ({
  collections,
  handleOtherCollectionClick,
  mainFeaturedCollection,
  handleMainClick,
  aboutMePayload,
}: HomeContainerProps) => {
  return (
    <Col>
      <Megatron
        imageData={mainFeaturedCollection.image}
        alt={mainFeaturedCollection.alt}
      >
        <MainFeatureCard
          name={mainFeaturedCollection.name}
          description={mainFeaturedCollection.description}
          buttonText="discover"
          onClick={handleMainClick}
          slug={mainFeaturedCollection.slug}
        />
      </Megatron>
      <FeaturedCollections
        collections={collections}
        onClick={handleOtherCollectionClick}
      />
      <Col className="w-full items-center">
        <AboutMeCard
          imageData={aboutMePayload.image}
          alt={aboutMePayload.alt}
          title={aboutMePayload.name}
          description={aboutMePayload.description}
        />
      </Col>
    </Col>
  )
}

export default HomeContainer
