import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

async function handler(req, res){
    if(req.method === 'POST'){
        const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
        const db = client.db()

        const usersCollection = await db.collection('users')

        const user = await usersCollection.findOne({}, {username: req.body.username })
        if(!user){
            return res.status(400).json("Cannot find user")
        }
        const match = await bcrypt.compare(req.body.password, user.user.password)
        try{
            if (await bcrypt.compare(req.body.password, user.user.password)){
                res.json({message: "Username and Password match", body: {id:user._id, username: user.user.username}})
            }else{
                res.json('Not Allowed')
            }
        }
        catch{
            res.json("Caught")
        }

        client.close()
    }
}

export default handler