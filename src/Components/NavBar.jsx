import { AppBar , Toolbar, Box,Link, IconButton,List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import {Drawer } from '@mui/material'



const NavBar = () => {

	let [isOpen, setIsOpen] = useState(false);
	function handleClick(){
		setIsOpen(true)
	}

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
				<Link href='/' color='inherit' underline='none'>Shop</Link>
				<Link href='/women' color='inherit' underline='none'>Women</Link>
				<Link href='/men' color='inherit' underline='none'>Men</Link>
				<Link href='/newarrivals' color='inherit' underline='none'>New Arrival</Link>
				<Link href='/about' color='inherit' underline='none'>About</Link>
				<Link href='/help' color='inherit' underline='none'>Help</Link>
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
				<ShoppingBagIcon  sx={{fontSize:'25px',
				fontWeight:'600'}}/>
				</IconButton>
			</Box>
			<Box
			sx={{display:{xs:'flex', md:'none'}}}
			>
				<IconButton onClick={handleClick}>
				<MenuIcon sx={{fontSize:'35px', color:'black'}}/>
				</IconButton>

				<Drawer aria-label='muiDrawer' anchor='left' open={isOpen}  onClose={()=>setIsOpen(false)}>
				<List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsOpen(false)}>
                  <ListItemText primary="Shop" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsOpen(false)}>
                  <ListItemText primary="Women" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsOpen(false)}>
                  <ListItemText primary="Men" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsOpen(false)}>
                  <ListItemText primary="New Arrival" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsOpen(false)}>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsOpen(false)}>
                  <ListItemText primary="Help" />
                </ListItemButton>
              </ListItem>
            </List>
				</Drawer>
			</Box>
		</Toolbar>
	</AppBar>
	
  )
}

export default NavBar

