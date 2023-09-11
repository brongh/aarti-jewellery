import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Noto_Sans_TC } from "next/font/google"
import Layout from "@/components/Layout/Layout"

const notoSansTc = Noto_Sans_TC({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
