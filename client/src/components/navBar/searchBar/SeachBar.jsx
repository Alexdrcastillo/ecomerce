    import React, { useState } from 'react'
    import { styled, alpha } from '@mui/material/styles';
    import SearchIcon from '@mui/icons-material/Search';
    import InputBase from '@mui/material/InputBase';
    import { useDispatch, useSelector } from 'react-redux'
    import { setProduct } from '../../../redux/reducers/Products/productsSlice';
 import { initialState } from '../../../redux/reducers/Products/productsSlice';
        
        const Search = styled('div')(({ theme }) => ({
          position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      margin: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    }));


    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    }));
    

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));
    const SearchBar = () => {
      
      const [searchValue, setSearchValue] = useState('')
      const products = useSelector((state) => state.product.products)

      const originalProducts = [...products]

      const dispatch=useDispatch()  

      const searchProduct = (searchValue) => {
      return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    }
    const handleChange = (event) => {
      setSearchValue(event.target.value)
      if (event.target.value === '') {
        dispatch(setProduct(originalProducts))
      } else {
        const filteredProducts = searchProduct(event.target.value)
        dispatch(setProduct(filteredProducts))
      }
    }

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        if (searchValue === '') {
          dispatch(setProduct(originalProducts))
        } else {
          const filteredProducts = searchProduct(searchValue)
          dispatch(setProduct(filteredProducts))
        }
      }
    }
    console.log("orig" + originalProducts)
      return (

        <div>
        <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}

                />
              </Search>
        </div>
      )
      }

    export default SearchBar