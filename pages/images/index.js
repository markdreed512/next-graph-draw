import { useState, useEffect  } from 'react'
import { useRouter } from 'next/router'
import classes from './images.module.css'
import FileUploader from '@/components/FileUploader'

function Images() {
    const [ imagesFromDb, setImagesFromDb ] = useState([])
    const router = useRouter()
    useEffect(() => {
        async function getImages(){
            const response = await fetch('../api/get-images')
            const data = await response.json()
            setImagesFromDb(data)
        }
        getImages()
    }, [])
    const selectImage = (e) => {
        router.push("/" + e.target.getAttribute('data-id'))
    }
    return (
        <>
            <FileUploader />
            <ul>
                {
                    imagesFromDb.map(image => {
                        return (
                            <li key={image._id} className={classes.listItem}>
                                <img src={image.data.file} className={classes.thumbnail} />
                                <button onClick={selectImage} data-id={image._id}>Select</button>
                            </li>
                        ) 
                    })
                }
            </ul>
        </>

    )
}

export default Images