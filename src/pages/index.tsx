import HomeContainer from "@/components/Containers/home"
import { AboutMeDTO } from "@/dtos/aboutMe"
import { HomeCollectionsPayload } from "@/dtos/collections"
import { sanityClient } from "@/services/sanityClient"

type Props = {
  collections: HomeCollectionsPayload[]
  mainFeaturedCollection: HomeCollectionsPayload
  aboutMe: AboutMeDTO
}

export default function Home({
  collections,
  mainFeaturedCollection,
  aboutMe,
}: Props) {
  const handleMainClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const handleOtherCollectionClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
  }
  return (
    <main className="">
      <HomeContainer
        collections={collections}
        handleMainClick={handleMainClick}
        mainFeaturedCollection={mainFeaturedCollection}
        handleOtherCollectionClick={handleOtherCollectionClick}
        aboutMePayload={aboutMe}
      />
    </main>
  )
}

export async function getStaticProps() {
  const res: HomeCollectionsPayload[] =
    await sanityClient.fetch(`*[_type == 'collections' && featured == true && archived != true] | order(order asc) {
    name,
    "alt": image.alt,
    description,
    slug,
    image {
      asset->{
        ...,
        metadata
      }
    }
  }`)

  const mainFeature = res?.splice(0, 1)[0]
  console.log(mainFeature)

  const aboutMeResponse: AboutMeDTO[] =
    await sanityClient.fetch(`*[_type == 'aboutMe'] {
    name,
    description,
    "alt": image.alt,
    image {
      asset->{
        ...,
        metadata
      }
    }
  }`)
  const aboutMe = aboutMeResponse[0]

  return {
    props: {
      collections: res,
      mainFeaturedCollection: mainFeature,
      aboutMe,
    },
  }
}
