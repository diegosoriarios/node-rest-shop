import { 
    ITEM_HAS_ERRORED, 
    ADD_ITEM_TO_CART,
    REMOVE_CART_ITEM
} from '../actions/actionType'

export const initialState = {
    items: []
}

export function itemHasErrored(state = false, action) {
    switch(action.type){
        case ITEM_HAS_ERRORED:
            return action.hasErrored
        default:
            return state
    }
}

export function addItemToCart(state = initialState, action) {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: state.items.concat(action.item)
            }
        default:
            return state
    }
}

export function removeItemFromCart(state = initialState, action) {
    switch(action.type) {
        case REMOVE_CART_ITEM:
            return {
                ...state,
                items: state.items.slice(action.item, 1)
            }
        default:
            return state
    }
}