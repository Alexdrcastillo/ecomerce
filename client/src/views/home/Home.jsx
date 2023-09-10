  import React from 'react'
  import { useEffect, useState } from 'react'
  import axios from "axios"
  import CardProducts from '../../components/cardProducts/CardProducts'
  import { useDispatch, useSelector } from 'react-redux'
  import { setProduct } from '../../redux/reducers/Products/productsSlice'
import NavBar from '../../components/navBar/Navbar'

  const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        const getProducts = async () => {
          const products = await axios.get("http://localhost:4000/")
          dispatch(setProduct(products.data)) }

        getProducts()
    }, [])


    return (
      <div>  
              <NavBar />

        <div style={{marginLeft: "8vh"}}>
          <CardProducts />
        </div>
      </div>
    )
  }

  export default Home