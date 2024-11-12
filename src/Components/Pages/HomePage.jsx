import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'
import { useSelector } from 'react-redux'


const HomePage = () => {

const data = useSelector((state)=> state.products)



  return (
    <Grid container
      sx={{ backgroundColor: '#a09484', height: '90vh', width: '100vw' }}
    >
      <Grid item xs={12} sm={6} sx={{
		display:'flex',
		width:{xs:'100%',md:'50%'},
		height:{xs:'45vh', md:'90vh'},
		justifyContent:'flex-start',
		alignItems:'center',
		// backgroundColor:'green'
	  }}>
        <Box 
		component='img'
		src="https://freepngimg.com/thumb/exercise/143187-vector-exercise-png-file-hd.png"
		sx={{
			pt:5,
			height:{xs:'100%', md:'90%'},
			 width:{xs:'auto', md:'auto'},
			}}
		>
			
        
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}
        sx={{
		 
		   width:{xs:'100%',md:'50%'},
		   height:{xs:'45vh',md:'100%'},
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:{xs:"center", md:'flex-start'},
        }}
      >
        <Typography
          sx={{
            fontSize:{xs:'35px', md:'50px'},
            color: '#fff',
            m: 0
          }}
        >
          Innovative Effortless.
        </Typography>
        <Typography
          sx={{ fontSize: '22px', m: 0, fontWeight: '500', color: '#fff' }}
        >
          Shoes for the new generation
        </Typography>
        <Button
          sx={{ pt: 1, pb: 1, pl: 3, pr: 3, backgroundColor: '#000000', mt: 1, borderRadius: '20px' }}
        >
          Shop Now
        </Button>
      </Grid>
    </Grid>
  )
}

export default HomePage;
