import { 
    ITEM_HAS_ERRORED, 
    ADD_ITEM_TO_CART,
    REMOVE_CART_ITEM
} from './actionType'

export function itemHasErrored(bool) {
    return {
        type: ITEM_HAS_ERRORED,
        hasErrored: bool
    }
}

export function addItemToCart(item) {
    return {
        type: ADD_ITEM_TO_CART,
        item: item
    }
}

export function removeItemFromCart(item) {
    return {
        type: REMOVE_CART_ITEM,
        item: item
    }
}