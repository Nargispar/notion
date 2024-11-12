import { legacy_createStore ,  applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk';
import { productReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";


const RootReducer = combineReducers({
	product:productReducer,
	cart:cartReducer
})

const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export{store}