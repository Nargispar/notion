
import { ADD_TO_CART } from "./actionType";
import { INCREASE_QTY } from "./actionType";
import { DECREASE_QTY } from "./actionType";
import { REMOVE_FROM_CART } from "./actionType";

const addToCart = (payload) =>({
	type:ADD_TO_CART,
	payload
})
const increaseQty = (payload) =>({
	type:INCREASE_QTY,
	payload
})
const decreaseQty = (payload) =>({
	type:DECREASE_QTY,
	payload
})
const removeFromCart = (payload) =>({
	type:REMOVE_FROM_CART,
	payload
})

export {addToCart, increaseQty, decreaseQty, removeFromCart}

