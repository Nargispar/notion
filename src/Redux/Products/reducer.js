

const initState = {
	loading:false,
	error:false,
	products:[],
	currentProducts :{}
}

const productReducer = (state=initState,action)=>{
	switch(action.type){
		case "PRODUCTS_LOADING" :
			return {...state, loading:true}
		case "PRODUCTS_ERROR" :
			return {...state, loading:false,error:true }	
		case "PRODUCTS_SUCCESS" :
			return {...state, loading:false,error:false, products:action.payload}
		case "CURRENT_PRODUCTS_LOADING" :
			return {...state, loading:true}
		case "CURRENT_PRODUCTS_ERROR" :
			return {...state, loading:false,error:true }	
		case "CURRENT_PRODUCTS_SUCCESS" :
			return {...state, loading:false,error:false, currentProducts:action.payload}
		default :
			return state;
	}
}
export{productReducer}