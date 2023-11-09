import { createStore } from 'redux'

// const loggedInUserReducer = (state = {loggedInUser: null}, action) => {
//     if(action.type === 'logIn'){

//     }
//     if(action.type === 'logOut'){

//     }
// }
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

const store = createStore(isLoggedInReducer)

export default store