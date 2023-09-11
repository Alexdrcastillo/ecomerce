import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterPrice = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.product.products)
  const [ products, setProducts ] = useState("");

  const handleChange = (event) => {
    const price = event.target.value;
    setProducts(price);
    
    // Mueve la lógica de filtrado aquí
    const filteredProducts = state.filter(product => product.price <= price);
    console.log(filteredProducts);
  };

  return (
    <div> 
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">price</InputLabel>
          <Select
            style={{width: "12rem"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={products}
            label="price"
            onChange={handleChange}
          >
            <MenuItem value={10}>10$</MenuItem>
            <MenuItem value={20}>20$</MenuItem>
            <MenuItem value={30}>30$</MenuItem>
            <MenuItem value={60}>60$</MenuItem>
            <MenuItem value={100}>100$</MenuItem>
            <MenuItem value={200}>200$</MenuItem>
            <MenuItem value={400}>400$</MenuItem>
            <MenuItem value={500}>500$</MenuItem>

          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default FilterPrice
