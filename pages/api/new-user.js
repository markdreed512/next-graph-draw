import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

async function handler(req, res){
    if(req.method === 'POST'){
        const password = req.body.password
        const username = req.body.username
        const isLoggedIn = req.body.isLoggedIn

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = {
            username: username,
            password: hashedPassword,
            isLoggedIn: isLoggedIn
        }

        const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
        const db = client.db()

        const usersCollection = db.collection('users')

        const result = await usersCollection.insertOne({user})

        console.log(result)

        client.close()

        res.status(201).json({message: 'User inserted!'})
    }
}

export default handler