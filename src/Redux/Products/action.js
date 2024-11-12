import { PRODUCTS_LOADING, PRODUCTS_ERROR,PRODUCTS_SUCCESS,CURRENT_PRODUCTS_SUCCESS,CURRENT_PRODUCTS_ERROR,CURRENT_PRODUCTS_LOADING} from './actionType'

// import { PRODUCTS_ERROR, PRODUCT_SEC } from "./actionType"






const handleLoading = () =>({
	type:PRODUCTS_LOADING
})
const handleSuccess= (payload) =>({
	type:PRODUCTS_SUCCESS,
	payload
})

const handleError = () =>({
	type:PRODUCTS_ERROR
})



// const getData = () => (dispatch) => {
// 	dispatch(handleLoading());
// 	fetch("http://localhost:5000/products")
// 	.then((res) => res.json())
// 	.then((res) => dispatch(handleSuccess(res)))
// 	.catch(()=>dispatch(handleError()))
// 	}


//second

const getData = () => (dispatch) => {
	console.log("Fetching data..."); // Logs fetch initiation
	dispatch(handleLoading());
	fetch("http://localhost:5000/products")
	  .then((res) => res.json())
	  .then((res) => {
		console.log("Fetch successful:", res); // Logs successful response
		dispatch(handleSuccess(res));
	  })
	  .catch((error) => {
		console.error("Fetch error:", error); // Logs any error during fetch
		dispatch(handleError());
	  });
  };
	
	
	const handleCurrentProductsLoading = () =>({
		type: CURRENT_PRODUCTS_LOADING
	})
	
	const handleCurrentProductsSuccess = (payload) =>({
		type:CURRENT_PRODUCTS_SUCCESS,
		payload
	})
	
	const handleCurrentProductsError = () =>({
		type:CURRENT_PRODUCTS_ERROR
	})
	

	const getCurrentProductData = (id) => (dispatch) => {
		dispatch(handleCurrentProductsLoading());
		fetch(`http://localhost:5000/products/${id}`)
		.then((res) => res.json())
		.then((res) => dispatch(handleCurrentProductsSuccess(res)))
		.catch(()=>dispatch(handleCurrentProductsError()))
		}
	
		export {getData, getCurrentProductData}