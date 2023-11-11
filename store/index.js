import { createStore, combineReducers } from 'redux'

const loggedInUserReducer = async (state = null, action) => {
    if(action.type === 'SETUSER'){
        // fetch user, return it
        const dbRes = await fetch('/api/get-user-by-id', {
            method: 'POST', 
            body: action.payload,
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const response = await dbRes.json()
        console.log("response: ", response)
        return {loggedInUser: response}
    }
    if(action.type === 'CLEARUSER'){
        return {loggedInUser: "logged oout dude"}
    }else{
        return state
    }
}
const isLoggedInReducer = (state = {isLoggedIn: false}, action) =>{
    switch(action.type){
        case "LOGIN":
           return {isLoggedIn: true} 
        case "LOGOUT":
            return {isLoggedIn: false}
        default:
            return state
    }
    
}

const allReducers = combineReducers({
    loggedInUser: loggedInUserReducer,
    isLoggedIn: isLoggedInReducer
})

const store = createStore(allReducers)
// const store = createStore(isLoggedInReducer)


export default store