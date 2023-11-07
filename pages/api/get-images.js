import { MongoClient } from 'mongodb'

    async function handler(req, res){
        if(req.method === 'POST'){
            const data = req.body

            const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/images?retryWrites=true&w=majority')
            const db = client.db()

            const imagesCollection = db.collection('images')


            const result = await imagesCollection.find()

            console.log(result)

            client.close()

            res.status(201).json({message: 'Images fetched.'})
        }
}

export default handler