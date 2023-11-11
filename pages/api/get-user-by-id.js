import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

async function handler(req, res){
    if(req.method === 'POST'){
        const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
        const db = client.db()

        const usersCollection = await db.collection('users')

        const user = await usersCollection.findOne({}, {_id: new ObjectId(req.body.id) })
        console.log("user...", user.user.username)
        if(!user){
            return res.status(400).json("Cannot find user")
        }
        res.json({message: "Found user by id: ", body: user._id})

        client.close()
    }
}

export default handler