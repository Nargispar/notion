import { ADD_TO_CART,INCREASE_QTY,DECREASE_QTY,REMOVE_FROM_CART } from "./actionType";

const initState = {
	cart:[]
}

const cartReducer = (state = initState ,action) =>{
	const {type, payload} = action


	switch(type){
		case ADD_TO_CART :
			//let check if the cart is already present
		const isPresent = state.cart.find((prod)=>{
			return prod.id === payload.id
		})
		//if present we will increase the quantity
		let newCart;
		if (isPresent) {
			// Increase quantity if product is already present
			newCart = state.cart.map((prod) => 
			  prod.id === payload.id ? { ...prod, qty: prod.qty + 1 } : prod
			);
		  } else {
			// Add new product with qty: 1 if not present
			let newPayload = { ...payload, qty: 1 };
			newCart = [...state.cart, newPayload];
		  }
		  return { ...state, cart: newCart };
		
		case INCREASE_QTY :
			let modifiedCart = state.cart.map((prod)=>{
				if(prod.id === payload.id){
					return {...prod, qty : prod.qty + 1}
				}
				else{
					return prod
				}
			})
			return {...state, cart: modifiedCart}
				
			case DECREASE_QTY :
				let resultantCart = state.cart.map((prod)=>{
					if(prod.id === payload.id){
						return {...prod, qty : prod.qty - 1}
					}
					else{
						return prod
					}
				})
				return {...state, cart: resultantCart}
		    case REMOVE_FROM_CART :
				let updatedCart = state.cart.filter((prod) =>{
					return !(prod.id === payload.id)
				})
				return {...state, cart:updatedCart}
		default : 
		    return state;
	}
}

export {cartReducer}