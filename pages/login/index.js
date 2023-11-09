import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/signup.module.css'

function loginPage() {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()

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
    console.log("response: ", response)
    if(response === "Username and Password match"){
        // update redux state
        dispatch({type: "LOGIN"})
        setMessage(username + ' is logged in')

        setUsername('')
        setPassword('') 
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
            <p className={styles.message}>{message + ": " + isLoggedIn}</p>
        </form> 
  
      </>
    )
}

export default loginPage