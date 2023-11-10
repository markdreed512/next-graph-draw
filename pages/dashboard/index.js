import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'

// import { MongoClient, ObjectId } from 'mongodb'

 function UserDashboard() {
    // console.log("props:", props)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const loggedInUser = useSelector(state => state.loggedInUser)
  return (
    <>
        <Head>
            {/* <title>{props.meetupData.title}</title> */}
        </Head>
        <div className="">
            <h1 >{loggedInUser}</h1>
        </div>
    </>
  );
}

// export async function getStaticPaths(){
//     const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
//     const db = client.db()

//     const usersCollection = db.collection('users')

//     const users = await usersCollection.find({}, {_id: 1}).toArray()

//     client.close()

//     return {
//         fallback: 'blocking',
//         paths: users.map(user => ({
//             params: {userId: user._id.toString()}
//         }))
//     }
// }

// export async function getStaticProps(context){
//     const userId = context.params.userId

//     const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
//     const db = client.db()

//     const usersCollection = db.collection('users')

//     const user = await usersCollection.findOne({_id: new ObjectId(userId)})

//     client.close()
//     return {
//         props: {
//             userData: {
//                 username: user.data.username,
//                 userId: user._id
//             }
//         }
//     }
// }



export default UserDashboard;
