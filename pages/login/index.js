import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { loggedInUserContext } from '../_app'

import styles from '../../styles/signup.module.css'

function loginPage() {
    const router = useRouter()

    const [ loggedInUser, setLoggedInUser ] = useContext(loggedInUserContext)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ message, setMessage ] = useState('')
  
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      if(username === '' ){
        setMessage('Please enter username')
      }
      else if(password === '' ){
        setMessage('Please enter password')
      }

      const userData = {
          username,
          password
      }
      const dbRes = await fetch('/api/get-user', {
          method: 'POST', 
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json'
          }
      })
      const response = await dbRes.json()
      if(response.message === "Username and Password match"){
          console.log("ID?", response.body)
          // set global loggedInUser
        
          router.push('/dashboard/' + loggedInUser.id)
      }
      else{
          setMessage('There is no user with that username and password')
      }
    }
    return (
      <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder="Select username"className={styles.input} onChange={handleUsernameChange} value={username}/>
            <input type="password" placeholder='Select password' className={styles.input} onChange={handlePasswordChange} value={password}/>
            <input type="submit" value='Submit' className={styles.input}/>      
            <p className={styles.message}>{message}</p>
        </form> 
  
      </>
    )
}

export default loginPage