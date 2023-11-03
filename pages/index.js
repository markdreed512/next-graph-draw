import Head from 'next/head';
import { MongoClient } from "mongodb";


function HomePage(props) {
  return (
    <>
      <Head>
        <title>Graph Draw</title>
        <meta name="description" content="meta content"></meta>
      </Head>
      <h1>Hello Index.js</h1>
    </>
  );
}