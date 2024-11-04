import React from 'react'
import { Typography, Card,Box, CardMedia,CardActions, CardContent, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Shoecard = () => {
  return (
	<div>
	  	<Card className="no-padding-margin"
		sx={{
			// backgroundColor:'pink',
			width:'220px',
			height:"280px",
			p:5,
			position:'relative',
			border:'none',
			boxShadow:"none",
			'&:hover': { // Corrected `&:hover` syntax
				backgroundColor: 'primary.main',
				boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'
			},
			// display:'flex',
			// justifyContent:'center',
			// alignItems:'center'
		}}
		>
		<CardMedia 
		component="img"
		image="https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw2ea22199/images/large/196989244297-1.jpg"
		sx={{
			height:"50%",
			width:'80%',
			pb:3,
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
			sx='m:0'
			>women'S</Typography>
			<Typography variant='body1'
			sx={{fontSize:'16px', fontWeight:'500'}}>MILLION AIR - HOTTER AIR</Typography>
			<Box component='div'>MRP  ₹7,999.00 <Typography component='span' 
			sx={{
				fontSize:'14px',
				color:'#6EC207'
			}}
			>Festive Offer</Typography></Box>
		</CardContent>
		<CardActions sx={{ mt:2,p:0, height:'10%',width:'80%', position:'absolute',top:'20px', right:'20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
			<Typography sx={
				{
					fontSize:'12px',
					color:'#fff',
					px:1.5,
					backgroundColor:'#4379F2'
				}
			}>New</Typography>
			<IconButton>
			<FavoriteBorderIcon sx={{fontSize:'25px'}}/>
			</IconButton>
		</CardActions>
	</Card>
	
	</div>
  )
}

export default Shoecard
