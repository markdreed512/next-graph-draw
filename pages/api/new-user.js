import { MongoClient } from 'mongodb'
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
        const db = client.db()

        const usersCollection = db.collection('users')

        const result = await usersCollection.insertOne({data})

        console.log(result)

        client.close()

        res.status(201).json({message: 'User inserted!'})
    }
}

export default handler