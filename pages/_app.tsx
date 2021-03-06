import type { AppProps } from "next/app"
import { Amplify } from "aws-amplify"

import "../styles/globals.css"
import config from "../src/aws-exports"

Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
