import { MongoClient } from 'mongodb'

    async function handler(req, res){
        if(req.method === 'GET'){
            // const data = req.body

            const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/images?retryWrites=true&w=majority')
            const db = client.db()

            const imagesCollection = db.collection('images')

            const images = await imagesCollection.find({}, {_id: 1}).toArray()
            
            res.json(images)

            client.close()

            
        }
}

export default handler