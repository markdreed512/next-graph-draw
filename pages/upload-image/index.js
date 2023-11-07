import { useState } from 'react'

function uploadImagePage() {
    // const [ name, setName ] = useState('')
    const [ imageFile, setImageFile ] = useState(null)

    function convertToBase64(file){
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleFileSelect = async (e) => {
        const base64File = await convertToBase64(e.target.files?.[0])
        setImageFile(base64File)
    }
    const handleSubmitFile = async (e) => {
        e.preventDefault()
        if (!imageFile) return 

        try {
            // const data = new FormData()
            // data.set('file', imageFile)

            const res = await fetch('/api/new-image', {
                method: 'POST',
                body: imageFile
            })
            if(!res.ok) throw new Error (await res.text())
        }
        catch(err){
            console.error(err)
        }
        setImageFile(null)
    }
    return (
        <form onSubmit={handleSubmitFile}>
            <input type="file"  onChange={handleFileSelect} />
            <input type="submit" value="Upload" />
        </form>
    )
}

export default uploadImagePage