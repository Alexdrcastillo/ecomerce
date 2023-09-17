import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import CardProducts from '../../components/cardProducts/CardProducts'
import { useDispatch } from 'react-redux'
import { setProduct } from '../../redux/reducers/Products/productsSlice'
import NavBar from '../../components/navBar/Navbar'
import FilterPrice from '../filters/filterPrice'

const Home = () => {
  const dispatch = useDispatch();
  const { products, filter } = useSelector(state => state.product)

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get("http://localhost:4000/")
      dispatch(setProduct(products.data))
    }

    getProducts()
  }, [])

  const filteredProducts = products.filter(product => product.price >= filter.min && product.price <= filter.max)

  return (
    <div>  
      <NavBar />
      <div style={{marginTop: "10rem", width: "15rem", position: "fixed", marginLeft: "3rem"}}>
      <FilterPrice />
      </div>
      <div style={{marginLeft: "8vh"}}>
        <CardProducts products={filteredProducts} />
      </div>
    </div>
  )
}

export default Home
