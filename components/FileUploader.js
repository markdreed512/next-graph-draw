import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './FileUploader.module.css'

function FileUploader() {
  const router = useRouter()
  const [ imageFile, setImageFile ] = useState(null)
  const [ width, setWidth ] = useState("")
  const [ height, setHeight ] = useState("")

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
  async function getImageDimensions(file) {
      let img = new Image();
      img.src = URL.createObjectURL(file);
      await img.decode();
      let width = img.width;
      let height = img.height;
      return {
          width,
          height,
      }
    }

  const handleFileSelect = async (e) => {
      const dimensions = await getImageDimensions(e.target.files?.[0])
      setWidth(dimensions.width)
      setHeight(dimensions.height)
      const base64File = await convertToBase64(e.target.files?.[0])
      setImageFile(base64File)
  }
  const handleSubmitFile = async (e) => {
      e.preventDefault()
      if (!imageFile) return 

      try {
          const res = await fetch('/api/new-image', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  width: width,
                  height: height,
                  file: imageFile
              })
          })
          if(!res.ok) throw new Error (await res.text())
          router.push('/images')
      }
      catch(err){
          console.error(err)
      }
      setImageFile(null)
  }
  return (
      <form className={styles.uploaderForm} onSubmit={handleSubmitFile}>
          <input type="file"  onChange={handleFileSelect} />
          <input type="submit" value="Upload" className="submit"/>
      </form>
  )
}

export default FileUploader