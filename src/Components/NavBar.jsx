import {AppBar,Toolbar,Box,Link,List,ListItem,ListItemButton,ListItemText,Typography,IconButton,Button,Stack,Drawer,} from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
  import PermIdentityIcon from "@mui/icons-material/PermIdentity";
  import MenuIcon from "@mui/icons-material/Menu";
  import React, { useState } from "react";
  import { useSelector , useDispatch} from "react-redux";
  import { increaseQty, removeFromCart } from "../Redux/Cart/action";
  import { decreaseQty } from "../Redux/Cart/action";
  
  const NavBar = () => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
	const toggleCartDrawer = () => {
	  setCartOpen(!cartOpen);
	};
  
	const toggleNavDrawer = () => {
	  setIsOpen(!isOpen);
	};
	const handleIncrease =(id)=>{
		dispatch(increaseQty({id}))
	}
	const handleDecrease = (id,qty)=>{
		if(qty > 1){
			dispatch(decreaseQty({id}))
	}
	else{
		dispatch(removeFromCart({id}))
	}
		}

	

	const convertToNumber = (str) =>{
		if(Number(str)){
			return Number(str)
		}
		let arr = str.includes(",")? str.split(",") : []
		let final_str = arr.reduce((a,c) => a+c,"")
		let result  = Number(final_str)
		return result

	}
	
	let total_final_price = 0

	cart.forEach((prod)=>{

		total_final_price += convertToNumber(prod.price)*prod.qty
	})
  
	return (
	  <AppBar
		position="static"
		sx={{ width: "100vw", height: "10vh", pl: { xs: 2 }, pr: { xs: 2 } }}
	  >
		<Toolbar
		  sx={{
			height: "100%",
			display: "flex",
			justifyContent: { xs: "space-between", md: "space-around" },
			alignItems: "center",
		  }}
		  disableGutters
		>
		  {/* logo */}
		  <Box
			component="img"
			src="https://www.skechers.in/on/demandware.static/Sites-skechersin-Site/-/default/dwb8c3fd3e/images/skechers-logo.png"
			sx={{
			  height: { xs: "auto", md: "auto" },
			  width: { xs: "150px", md: "200px" },
			}}
		  />
  
		  {/* Links for medium and larger screens */}
		  <Box
			sx={{
			  fontSize: "18px",
			  fontWeight: "600",
			  display: { xs: "none", md: "flex" },
			  justifyContent: "center",
			  alignItems: "center",
			  gap: 5,
			  textTransform: "uppercase",
			}}
		  >
			<Link href="/" color="inherit" underline="none">
			  Home
			</Link>
			<Link href="/shop" color="inherit" underline="none">
			  Shop
			</Link>
			<Link href="/women" color="inherit" underline="none">
			  Women
			</Link>
			<Link href="/men" color="inherit" underline="none">
			  Men
			</Link>
			<Link href="/newarrivals" color="inherit" underline="none">
			  New Arrival
			</Link>
			<Link href="/about" color="inherit" underline="none">
			  About
			</Link>
			<Link href="/help" color="inherit" underline="none">
			  Help
			</Link>
		  </Box>
  
		  {/* Icons for medium and larger screens */}
		  <Box
			sx={{
			  display: { xs: "none", md: "flex" },
			  justifyContent: "center",
			  alignItems: "center",
			}}
		  >
			<IconButton color="inherit">
			  <SearchIcon sx={{ fontSize: "25px", fontWeight: "800" }} />
			</IconButton>
			<IconButton color="inherit">
			  <PermIdentityIcon sx={{ fontSize: "25px", fontWeight: "600" }} />
			</IconButton>
			<IconButton color="inherit" onClick={toggleCartDrawer}>
			  <ShoppingBagIcon sx={{ fontSize: "25px", fontWeight: "600" }} />
			  <Typography>{cart ? cart.length : 0}</Typography>
			</IconButton>
		  </Box>
  
		  {/* Cart Drawer */}
		  <Drawer 
		  anchor="right" 
		  open={cartOpen} 
		  onClose={toggleCartDrawer}>
			<Box
			  role="presentation"
			  sx={{ width: 400, p:2 }}
			>
			  <Typography  variant="h6">Your Cart {cart.length}</Typography>
			  {/* <Typography>Items in cart: {cart ? cart.length : 0}</Typography> */}
			  {/* Additional cart item rendering can be added here */}
			</Box>
			<Box variant="body">
				{
					cart.length > 0 && cart.map((item)=>{
						return  <Box sx={{height:"30vh",width:400 ,m:0,backgroundColor:"",display:"flex",justifyContent:"space-between",alignItem:"center"}} >
						<Box sx={{height:"80%",width:"50%",m:0,display:"flex",justifyContent:"space-between",alignItem:"center",flexDirection:'column'}} >
							<Box sx={{height:"80%",width:"auto",p:0}} component="img" src={item.thumbnail}/>
							{/* <Button variant="text" sx={{height:"20%",color:"#6CB4EE", fontSize:16, fontWeight:600}} >Remove</Button> */}
						</Box>
					<Box sx={{height:"60%",width:"50%" ,m:0,p:0,display:"flex",justifyContent:"center",alignItem:"center", flexDirection:"column"}} >
					    <Typography variant="h6" sx={{fontSize:"18px",display:"inline-block"}}>{item.title}</Typography>
						<Stack direction="row">
							<Button 
							size="small" 
							variant="contained" 
							onClick={()=> handleIncrease(item.id)}
							sx={{backgroundColor:" #E5E4E2",color:" #000", fontSize:"20px", fontWeight:600,}}>+</Button>
							<Typography  sx={{backgroundColor:'#fff',pt:2, fontSize:25, fontWeight:600,px:2}}>{item.qty}</Typography>
							<Button 
							disabled={item.qty === 0} 
							size="small" 
							variant="contained" 
							onClick={()=> handleDecrease(item.id, item.qty)}
							sx={{backgroundColor:" #E5E4E2",color:"#000", fontSize:"20px",p:0, fontWeight:600}}>-</Button>
						</Stack>
						<Typography sx={{fontSize:"18px",mt:2,fontWeight:"600",ml:10}}>Price: {item.price}</Typography>
					</Box>
				
				   </Box>
						 
					})
				}
			</Box>
			<Box sx={{width:"400px" ,display:"flex", justifyContent:"space-between",px:3}}>
						<Typography sx={{fontSize:"18px", fontWeight:"600"}}>SUBTOTAL</Typography>
						<Box sx={{display:"flex"}}>
						{/* <Typography sx={{px:2}} >Rs. {total_original_price}</Typography> */}
						<Typography sx={{px:2}}>{total_final_price}</Typography>
						</Box>
					</Box>
		  </Drawer>
  
		  {/* Navbar Drawer for smaller screens */}
		  <Box sx={{ display: { xs: "flex", md: "none" } }}>
			<IconButton onClick={toggleNavDrawer}>
			  <MenuIcon sx={{ fontSize: "35px", color: "black" }} />
			</IconButton>
  
			<Drawer
			  aria-label="muiDrawer"
			  anchor="left"
			  open={isOpen}
			  onClose={toggleNavDrawer}
			>
			  <List>
				<ListItem disablePadding>
				  <ListItemButton onClick={toggleNavDrawer}>
					<ListItemText primary="Shop" />
				  </ListItemButton>
				</ListItem>
				<ListItem disablePadding>
				  <ListItemButton onClick={toggleNavDrawer}>
					<ListItemText primary="Women" />
				  </ListItemButton>
				</ListItem>
				<ListItem disablePadding>
				  <ListItemButton onClick={toggleNavDrawer}>
					<ListItemText primary="Men" />
				  </ListItemButton>
				</ListItem>
				<ListItem disablePadding>
				  <ListItemButton onClick={toggleNavDrawer}>
					<ListItemText primary="New Arrival" />
				  </ListItemButton>
				</ListItem>
				<ListItem disablePadding>
				  <ListItemButton onClick={toggleNavDrawer}>
					<ListItemText primary="About" />
				  </ListItemButton>
				</ListItem>
				<ListItem disablePadding>
				  <ListItemButton onClick={toggleNavDrawer}>
					<ListItemText primary="Help" />
				  </ListItemButton>
				</ListItem>
			  </List>
			</Drawer>
		  </Box>
		</Toolbar>
	  </AppBar>
	);
  };
  
  export default NavBar;
  