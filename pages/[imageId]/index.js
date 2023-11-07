import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
 function SingleImageView(props) {
  return (
    <>
        <Head>
            {/* <title>{props.meetupData.title}</title> */}
        </Head>
        <img src={props.imageData.url}/>
    </>
  );
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/images?retryWrites=true&w=majority')
    const db = client.db()

    const imagesCollection = db.collection('images')

    const images = await imagesCollection.find({}, {_id: 1}).toArray()

    client.close()

    return {
        fallback: 'blocking',
        paths: images.map(image => ({
            params: {imageId: image._id.toString()}
        }))
    }
}

export async function getStaticProps(context){
    const imageId = context.params.imageId

    const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/images?retryWrites=true&w=majority')
    const db = client.db()

    const imagesCollection = db.collection('images')

    const selectedImage = await imagesCollection.findOne({_id: new ObjectId(imageId)})

    client.close()
    return {
        props: {
            imageData: {
                url: selectedImage.data
            }
        }
    }
}



export default SingleImageView;
