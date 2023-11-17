import { useContext } from 'react'
import { UserContext } from '../_app'
import Link from 'next/link'
import Head from 'next/head'

 function UserDashboard() {
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext)
    console.log("loggedInUser: ", loggedInUser)
    return (
        <>
            <Head>
                {/* <title>{props.meetupData.title}</title> */}
            </Head>
            <div className="">
                <h1 >{"Welcome, " + loggedInUser.user.username}</h1>
                <div className="card-container">
                    <Link href="/images">
                        <div className="card" >
                            <h2>My Images</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;
