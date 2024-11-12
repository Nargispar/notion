import React, { useEffect, useState } from "react";
import { getData } from "../../Redux/Products/action";
import { useDispatch, useSelector} from "react-redux";
import { Box, Typography, Select, MenuItem, InputLabel,FormControl } from "@mui/material";
import Product from "../Product";


const Shop = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [priceFilter, setPriceFilter] = useState("");

  // Filter products based on price
  const filteredProducts = products.filter(
    (product) => !priceFilter || product.price <= priceFilter
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products]);

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <Box component="div" width="100%">
      <Box sx={{width:"100vw", display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{width:"80vw", mt: 5,backgroundColor:"yellow" ,pl:5}}>Shop All</Typography>
       <Box width="20vw" sx={{backgroundColor:"red",pr:5,mt:5}}>
		<FormControl  sx={{width:"300px", color:"black"}}>
        <InputLabel id="demo-simple-select-label">FILTER PRICE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priceFilter}
          label="FILTER PRICE"
          onChange={handlePriceChange}
        >
          <MenuItem value="">All</MenuItem>
		  <MenuItem value={1}>1 Rs</MenuItem>
          <MenuItem value={2}>2 Rs</MenuItem>
          <MenuItem value={5}>5 Rs</MenuItem>
          <MenuItem value={10}>10 Rs</MenuItem>
          <MenuItem value={20}>20 Rs</MenuItem>
          <MenuItem value={30}>30 Rs</MenuItem>
          <MenuItem value={50}>50 Rs</MenuItem>
          <MenuItem value={200}>200 Rs</MenuItem>
        </Select>
      </FormControl>
	  </Box>
      </Box>

      {filteredProducts.length > 0 ? (
        <Box
          sx={{
			width:"100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            mt: 8,
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Box>
      ) : (
        <Typography>No products under {priceFilter} Rs</Typography>
      )}
    </Box>
  );
};

export default Shop;
