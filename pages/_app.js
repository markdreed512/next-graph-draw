import React, { useState, useEffect } from 'react'
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

export const UserContext = React.createContext()

function MyApp({ Component, pageProps }) {
  const [ loggedInUser, setLoggedInUser ] = useState(null)
  useEffect(() => {
    async function getLoggedInUser(){
      const response = await fetch('../api/users')
      const users = await response.json()    
      for(let i = 0; i < users.length; i++){
        let user = users[i]
        if(user.user.isLoggedIn){
          setLoggedInUser(user)
        }else{
          console.log("no logged in user")
        }
      }
    }
    getLoggedInUser()

  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;