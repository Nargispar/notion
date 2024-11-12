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
    <Box component="div" width="100vw">
      <Box sx={{width:"100vw", display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{width:"100%", mt: 5,pl:5}}>Shop All</Typography>
       <Box width="20vw" sx={{pr:5,mt:5}}>
		<FormControl>
        <InputLabel id="demo-simple-select-label">FILTER PRICE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priceFilter}
          label="FILTER PRICE"
          onChange={handlePriceChange}
		  sx={{width:"15vw", color:"black", border:"1px solid #000"}}
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
