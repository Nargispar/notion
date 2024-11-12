import React, { useEffect, useState } from 'react'
import {getCurrentProductData} from '../../Redux/Products/action'
import { useDispatch, useSelector } from 'react-redux'
import { Box,Typography, Button,Select, MenuItem,FormControl,InputLabel } from '@mui/material'
import Filter from '../Filter'
import Product from '../Product'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../Redux/Cart/action'




const ProductDetail = () => {
	const {id} = useParams();
	const currentProducts = useSelector((state)=> state.product.currentProducts)
	
	const dispatch = useDispatch();
	
useEffect(()=>{
	if(id){
		dispatch(getCurrentProductData(id))
	}
}, [dispatch, id])

const handleCart = () =>{
	let payload = {
		...currentProducts,
		
	}
	dispatch(addToCart(payload))
}


// if(loading){
// 	return <h1>Loading...</h1>
// }
// if(error){
// 	return <h2>something went wrong</h2>
// }
// if(Object.keys(currentProducts).length === 0){
// 	return <h2>Product {id} not found</h2>
// }

console.log(currentProducts)




  return (
	<Box sx={{
		// backgroundColor:"red",
		border:"none",
		height:"90vh",
		width:"100vw",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	}}>
		<Product product={currentProducts}/>
		<Box>
			<Typography>Availablity : {currentProducts?.availabilityStatus}</Typography>
			<Typography>Warranty: {currentProducts?.warrantyInformation}</Typography>
			{/* <Typography>Weight : {currentProducts.weight}</Typography> */}
			
			<Button sx={{
				color:"#000",
				border:"1px solid #000",
				px:3,
				
			}}onClick={handleCart}> ADD TO CART</Button>  
		</Box>
	</Box>
	
  )
}

export default ProductDetail
