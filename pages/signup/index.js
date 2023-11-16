import { useState } from 'react'
import styles from '../../styles/signup.module.css'

function SignupPage() {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repeatPW, setRepeatPW ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleUsernameChange = (e) => {
      setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleRepeatPWChange = (e) => {
    setRepeatPW(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(username === '' ){
      setMessage('Please enter username')
    }
    else if(password === '' ){
      setMessage('Please enter password')
    }
    else if(repeatPW === '' ){
      setMessage('Please re-enter passord')
    }
    else if(password === repeatPW){
      const userData = {
          username,
          password,
          isLoggedIn: false
      }
      const response = await fetch('/api/new-user', {
        method: 'POST', 
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log("data: ", data)
      setMessage('Success!')
      setUsername('')
      setPassword('')
      setRepeatPW('')
    }
    else if(password !== repeatPW){
      setMessage('Passwords do not match')
    }
  }
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input type="text" placeholder="Select username"className={styles.input} onChange={handleUsernameChange} value={username}/>
          <input type="password" placeholder='Select password' className={styles.input} onChange={handlePasswordChange} value={password}/>
          <input type="password" placeholder='Repeat password' className={styles.input} onChange={handleRepeatPWChange} value={repeatPW}/>
          <input type="submit" value='Submit' className={styles.input}/>      
          <p className={styles.message}>{message}</p>
      </form> 

    </>
  )
}

export default SignupPage