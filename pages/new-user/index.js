import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

function NewMeetupPage() {
  const router = useRouter()
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
 
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  async function addUser(e){
    e.preventDefault()
    const userData = {
        firstName, lastName
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

    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <form onSubmit={addUser}>
        <input type="text" placeholder="first name" onChange={handleFirstNameChange} value={firstName}/>
        <input type="text" placeholder="last name"  onChange={handleLastNameChange} value={lastName}/>
        <button type="submit">OK</button>
      </form>
    </>
  )
}

export default NewMeetupPage