import { combineReducers } from 'redux'
import { itemHasErrored, addItemToCart } from './check'

export default combineReducers({
    itemHasErrored,
    addItemToCart
})