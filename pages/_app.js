import React, { useState } from 'react'
import "../styles/globals.css";

import Layout from "../components/layout/Layout";

export const loggedInUserContext = React.createContext()
function MyApp({ Component, pageProps }) {
  
  const [ loggedInUser, setLoggedInUser ] = useState({id: "test-user-id"})

  return (
    <loggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </loggedInUserContext.Provider>
  );
}

export default MyApp;