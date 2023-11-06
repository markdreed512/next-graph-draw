'use client';

function AddComponentForm() {
    async function handleSubmit(e){
        e.preventDefault()
        const user = {
            firstName: "Mark",
            lastName: "Reed"
          }
          const response = await fetch('/api/add-user', {
              method: 'POST', 
              body: JSON.stringify(user),
              headers: {
              'Content-Type': 'application/json'
              }
          })
      
          const data = await response.json()
      
          console.log("data: ", data)
      
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button>Add User</button>
        </form>
    )
}

export default AddComponentForm