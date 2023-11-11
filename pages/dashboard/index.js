import Head from 'next/head'
// import { useSelector, useDispatch } from 'react-redux'

// import { MongoClient, ObjectId } from 'mongodb'

 function UserDashboard() {
    // console.log("props:", props)
    // const isLoggedIn = useSelector(state => state.isLoggedIn)
    // const loggedInUser = useSelector(state => state.loggedInUser)
  return (
    <>
        <Head>
            {/* <title>{props.meetupData.title}</title> */}
        </Head>
        <div className="">
            <h1 >Logged In User here</h1>
        </div>
    </>
  );
}

export default UserDashboard;
