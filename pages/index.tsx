import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Amplify } from "aws-amplify"

import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"

import awsExports from "../src/aws-exports"
Amplify.configure(awsExports)

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AlgoRhythmic Art</title>
        <meta name="description" content="AlgoRhythmic Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24">
          <div className="sm:flex sm:flex-col sm:align-center self-center items-center justify-center space-y-6">
            <h1 className="text-6xl font-bold block">AlgoRhythmic Art</h1>
            <div>
              <Image src="/logo.png" alt="AlgoRhythmic Art" width={204} height={167} />
            </div>
            <Authenticator>
              {({ signOut, user }) => (
                <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
                </main>
              )}
            </Authenticator>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
