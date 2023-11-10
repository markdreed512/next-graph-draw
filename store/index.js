import { createStore, combineReducers } from 'redux'

const loggedInUserReducer = (state = null, action) => {
    if(action.type === 'logIn'){
        return {loggedInUser: "logged in UUUSSEr!!"}
    }
    if(action.type === 'logOut'){
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