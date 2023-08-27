import { sanityClient } from "@/services/sanityClient"

export async function getStaticProps() {
  const res = await sanityClient.fetch(`*[_type == "rings"]{
    title, description, 
    "images": images[]{
      alt, caption, featured, crop, hotspot, 
      "imageUrl": asset->url
    }
  }`)

  return {
    props: {
      rings: res,
    },
  }
}

export default function Home({ rings }: any) {
  console.log(rings)
  return <main></main>
}
