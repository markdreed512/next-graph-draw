import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../_app'

import styles from '../../styles/signup.module.css'

function loginPage() {
    const router = useRouter()

    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext)
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
      console.log("submit")
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
      console.log("resp0nse: ", response)
      if(response.message === "Username and Password match"){
        console.log("he3re: ", response.body)
          const user = {
            id: response.body.id,
            username: response.body.username,
            isLoggedIn: true
          }
          const loginUserRes = await fetch('/api/login-user', {
            method: 'PATCH', 
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const loginUserData = await loginUserRes.json()
          console.log("loginUserData:", loginUserData)
          setLoggedInUser(user)
          // router.push('/dashboard')
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