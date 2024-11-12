const PRODUCTS_LOADING = "PRODUCTS_LOADING";
const PRODUCTS_ERROR = "PRODUCTS_ERROR";
const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
const CURRENT_PRODUCTS_SUCCESS = "CURRENT_PRODUCTS_SUCCESS";
const CURRENT_PRODUCTS_ERROR = "CURRENT_PRODUCTS_ERROR";
const CURRENT_PRODUCTS_LOADING = "CURRENT_PRODUCTS_LOADING";

export { PRODUCTS_LOADING, PRODUCTS_ERROR,PRODUCTS_SUCCESS,CURRENT_PRODUCTS_SUCCESS,CURRENT_PRODUCTS_ERROR,CURRENT_PRODUCTS_LOADING}

// const initState = {
// 	loading:false,
// 	error:false,
// 	products:[],
// 	currentProduct :{}
// }

// const reducer = (state=initState,action)=>{
// 	switch(action.type){
// 		case "IS_LOADING" :
// 			return {...state, loading:true}
// 		case "IS_ERROR" :
// 			return {...state, loading:false,error:true }	
// 		case "STORE_DATA" :
// 			return {...state, loading:false,error:false, products:action.payload}
// 			default :
// 			return state;
// 	}
// }
// export{reducer}