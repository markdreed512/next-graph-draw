import { useState } from 'react'
import styles from './signup.module.css'

function SignupPage() {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repeatPW, setRepeatPW ] = useState('')

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
    const userData = {
        username,
        password
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

    // router.push('/')
  }
  return (
    
    <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <input type="text" placeholder="Select username"className={styles.input} onChange={handleUsernameChange} value={username}/>
        <input type="password" placeholder='Select password' className={styles.input} onChange={handlePasswordChange} value={password}/>
        <input type="password" placeholder='Repeat password' className={styles.input} onChange={handleRepeatPWChange} value={repeatPW}/>
        <input type="submit" value='Submit' className={styles.input}/>
    </form> 
  )
}

export default SignupPage