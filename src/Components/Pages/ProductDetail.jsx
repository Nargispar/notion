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
		alignItems:"center",
		backgroundColor:"#E5E4E2"
	}}>
		<Box>
			<Box component="img" src={currentProducts?.thumbnail} sx={{backgroundColor:"#E5E4E2",mx:5, border:"1px solid #000"}}/>
		</Box>
		{/* <Product product={currentProducts}/> */}
		<Box>
		<Typography sx={{
				color:"#000",
				fontSize:"20px",
				fontWeight:600,
			
			}} >
				Title : {currentProducts?.title}
				</Typography>
				<Typography sx={{
				color:"#000",
				fontSize:"18px", 
				fontWeight:600,
				mt:2
			}} >
				Price : $ {currentProducts?.price} </Typography>
				<Typography  sx={{
				color:"#000",
				fontSize:"18px", 
				fontWeight:600,
				mt:2}}
				> Rating : {currentProducts?.rating}</Typography>

			<Typography sx={{
				color:"#000",
				fontSize:"20px",
				mt:2
			}} >
				Availablity : {currentProducts?.availabilityStatus}</Typography>
			<Typography sx={{
				color:"#000",
				fontSize:"20px",
				mt:2
			}}
				 >Warranty: {currentProducts?.warrantyInformation}</Typography>
			{/* <Typography>Weight : {currentProducts.weight}</Typography> */}
			
			<Button sx={{
				color:"#000",
				border:"1px solid #000",
				px:3,
				mt:3,
				backgroundColor:"#E5E4E2"
				
			}}onClick={handleCart}> ADD TO CART</Button>  
		</Box>
	</Box>
	
  )
}

export default ProductDetail
