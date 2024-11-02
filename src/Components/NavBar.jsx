import { AppBar , Toolbar, Box,Link, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

const NavBar = () => {
  return (
	<AppBar position='static' 
	sx={{width:'100vw', height:'10vh', pl:{xs:2},
		pr:{xs:2}}}
	>
		<Toolbar 
		sx={{
		height:'100%',
		display:'flex',
		justifyContent:{xs:'space-between',md:'space-around'},
		alignItems:'center',
		
		
	 }}
	    disableGutters
		>
			{/* logo */}
			<Box 
			component="img" 
			src="https://www.skechers.in/on/demandware.static/Sites-skechersin-Site/-/default/dwb8c3fd3e/images/skechers-logo.png"
			sx={{
			 height:{xs:'auto',md:'auto'},
			 width:{xs:'150px',md:'200px'},
			//  flexGrow:{xs:'1'},
			 
			}}
			/>
			<Box
			sx={{
				fontSize:'18px',
				fontWeight:'600',
				display:{xs:'none', md:'flex'},
				 justifyContent:'center',
				  alignItems:'center',
				  gap:5,
				  textTransform:'uppercase'
				}}
			>
				<Link to='/' color='inherit' underline='none'>Shop</Link>
				<Link to='/women' color='inherit' underline='none'>Women</Link>
				<Link to='/men' color='inherit' underline='none'>Men</Link>
				<Link to='/newarrival' color='inherit' underline='none'>New Arrival</Link>
				<Link to='/about' color='inherit' underline='none'>About</Link>
				<Link to='/help' color='inherit' underline='none'>Help</Link>
			</Box>

			<Box
			sx={{
				
				display:{xs:'none', md:'flex'},
				 justifyContent:'center',
				  alignItems:'center',
		
				  }} 
			>
				<IconButton color='inherit'>
				<SearchIcon  sx={{fontSize:'25px',
				fontWeight:'800'}}/>
				</IconButton>
				<IconButton color='inherit'>
				<PermIdentityIcon  sx={{fontSize:'25px',
				fontWeight:'600'}}/>
				</IconButton>
				<IconButton color='inherit'>
				<ShoppingBasketIcon  sx={{fontSize:'25px',
				fontWeight:'600'}}/>
				</IconButton>
			</Box>
			<Box
			sx={{display:{xs:'flex', md:'none'}}}
			>
				<IconButton>
				<MenuIcon sx={{fontSize:'35px', color:'black'}}/>
				</IconButton>
			</Box>
		</Toolbar>
	</AppBar>
	
  )
}

export default NavBar

