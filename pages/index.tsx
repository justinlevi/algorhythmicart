import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlgoRhythmic Art</title>
        <meta name="description" content="AlgoRhythmic Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl font-bold">AlgoRhythmic Art</h1>

        <Image src="/logo.png" alt="AlgoRhythmic Art" width={204} height={167} />

        <Authenticator className="pt-6">
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </main>
    </div>
  );
};

export default Home;
