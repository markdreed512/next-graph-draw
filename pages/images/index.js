import { useState, useEffect  } from 'react'

function Images() {
    const [ imagesFromDb, setImagesFromDb ] = useState([])
    useEffect(() => {
        async function getImages(){
            const response = await fetch('../api/get-images')
            const data = await response.json()
            setImagesFromDb(data)
        }
        getImages()
    }, [])
    
    return (
        <ul>
            {
                imagesFromDb.map(image => {
                    return (
                        <>
                        {/* <li key={image.id}>{image.title}</li> */}
                        <img src={image.data}></img>
                        </>
                    ) 
                })
            }
        </ul>
    )
}

export default Images