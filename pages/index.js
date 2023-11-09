import Head from 'next/head';
import { Fragment } from "react";


function HomePage() {
  return (
      <Fragment>
        <Head>
          <title>Graph Draw</title>
          <meta name="description" content="meta content"></meta>
        </Head>
        {/* <MeetupList meetups={props.meetups} /> */}
        <h1>Home Page</h1>
      </Fragment>
  );
}
  
  export default HomePage;