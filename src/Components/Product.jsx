import React from 'react'
import { Box ,Typography,Card,CardMedia,IconButton, CardContent, CardActions} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
	const navigate = useNavigate();
	console.log(product)
	const {id,thumbnail,title,price,rating} = product;
  return (
	
	<Card className="no-padding-margin"
	onClick={()=> navigate(`/shop/card/${id}`)}  // navigation

	sx={{
		// backgroundColor:'pink',
		width:'200px',
		height:"250px",
		p:5,
		border:'1px solid #000',
		boxShadow:"none",
		'&:hover': { // Corrected `&:hover` syntax
			backgroundColor: 'primary.main',
			boxShadow: '8px 4px 12px rgba(0, 0, 0, 0.2)'
		},
	
	}}
	>
	<CardMedia 
	component="img"
	image={thumbnail}
	sx={{
		height:"60%",
		width:'90%',
		pb:1,
		mt:3
		
		// backgroundColor:'yellow'
	}}
	/>
	<CardContent component='div'
	sx={{
		m:0,
		p:0,
		height:"40%",
		width:'100%',
		// backgroundColor:'red',
		display:'flex',
		flexDirection:'column'
	}}
	>
		<Typography variant='body1' 
		sx={{fontSize:'14px', fontWeight:'600'}}
		>{title}</Typography>
		{/* <Typography variant='body1'
		sx={{fontSize:'14px', fontWeight:'600'}}>MILLION AIR - HOTTER AIR</Typography> */}
		<Box  sx={{
			fontSize:'14px',
			color:'#6EC207'
		}} component='div'>MRP: ₹ {price}<Typography component='span' 
		sx={{
			fontSize:'14px',
			color:'#000',
			fontSize:"12px",
			ml:2
		}}
		>{rating} Star</Typography></Box>
	</CardContent>
	
</Card>



  )
}

export default Product
