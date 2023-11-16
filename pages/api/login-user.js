import { MongoClient, ObjectId } from 'mongodb'

async function loginUserHandler(req, res){
    if(req.method === 'PATCH'){
        // const data = req.body
        console.log("boody: ", req.body)
        const client = await MongoClient.connect('mongodb+srv://cdmarkemailtest:n3AazDH3OX8KJ2WU@cluster0.llsqyvn.mongodb.net/users?retryWrites=true&w=majority')
        const db = client.db()

        const usersCollection = db.collection('users')

        const user = await usersCollection.findOneAndUpdate({_id: new ObjectId(req.body.id) }, {$set: {"user.isLoggedIn": true}})
        
        res.json(user)

        client.close()

        
    }
}

export default loginUserHandler