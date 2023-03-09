import { CoffeeMakerSharp } from '@mui/icons-material'
import { combineReducers } from 'redux'

const user = (state = null) => state

const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businesses = [ ...state ]
            businesses.splice(action.value, 1)
            return businesses
        default:
            return state
    }
}
// probably need to adjust this..
const fetches = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BUSINESSES':
            return action.value
            break;
        // case 'DELETE_BUSINESSES':
        //     const makes = [...state]
        //     makes.splice(action.value, 1)
        //     return makes
        default:
            return state
    }
}

export default combineReducers({ user, businesses, fetches })