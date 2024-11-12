import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { useState } from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

const Filter = () => {
	const products = useSelector((state) => state.product.products);


	const [priceFilter, setPriceFilter] = useState(10);
	const filteredProducts = products.filter((product)=> product.price <= priceFilter)
  return (
<Box component="div" sx={{display:"flex", justifyContent:"flex-start"}}>
    
      
      {/* Input to set price filter */}
      <TextField
        label="Filter by Max Price"
        type="number"
        value={priceFilter}
        onChange={(e) => setPriceFilter(Number(e.target.value))}
        sx={{ mb: 3 }}
      />

    
      
      {false ? (
        <Typography variant="h2">Entities loading...</Typography>
      ) : false ? (
        <Typography variant="h3">Something went wrong</Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            flexWrap: 'wrap',
          }}
        >
          {
		  filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <Typography>No products under {priceFilter} Rs</Typography>
          )}
        </Box>
      )}
    </Box>

  )
}

export default Filter
