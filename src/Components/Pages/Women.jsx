import React from 'react'
import { Box, Stack } from '@mui/material'
import Shoecard from '../Shoecard'

const Women = () => {
  return (
	<Stack>
		<Stack sx={{
			height:{xs:'70vh', md:'70vh'}, 
			mb:7
		}} width='100vw'>
	<Box 
	 component="img" 
	 src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw69320da4/Category-Landing/Category-Desktop/Women/Skechers-street-Desktop%20-Women-Landing.jpg?sw=1600&q=95"
	 sx={
		{
			height:{xs:'auto', md:'auto'},
			width:{xs:'100%', md:'100%'},
			// objectFit:{xs:'contain'}
		}
	 }
	 />
	 </Stack>
	 <Stack  direction="row" component="div"
	 sx={{
		 width:'100%',display:"flex",flexWrap:'wrap',gap:2, justifyContent:'center', alignItems:'center'}} 
	  >
	 <Shoecard/>
	 <Shoecard/>
	 <Shoecard/>
	 <Shoecard/>
	 <Shoecard/>
	 
	 </Stack>
	 </Stack>
  )
}

export default Women
