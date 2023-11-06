import Head from 'next/head';
import { MongoClient } from "mongodb";
import { Fragment } from "react";

// import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
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

export async function getStaticProps() {
    const client = await MongoClient.connect(
      "mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();
  
    const usersCollection = db.collection("users");
  
    const users = await usersCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        users: users.map((user) => ({
          firstName: user.data.firstName,
          lastName: user.data.lastName,
          id: user._id.toString(),
        })),
      },
      revalidate: 10,
    };
  }
  
  export default HomePage;