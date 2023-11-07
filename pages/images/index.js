import { useState, useEffect  } from 'react'

function Images() {
    const [imageArray, setImageArray ] = useState([{title: "test", id: 1}])
    useEffect(() => {
        async function getImages(){
            const response = await fetch('../api/get-images')
            const data = response.json()
            console.log("get images data:" ,data)
        }
        getImages()
    }, [])
    
    return (
        <ul>
            {
                imageArray.map(image => {
                    return (
                        <li key={image.id}>{image.title}</li>
                    ) 
                })
            }
        </ul>
    )
}

export default Images