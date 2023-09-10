import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/navBar/Navbar'

const Detail = () => {
    const { id } = useParams()
       
    const [product, setProduct] = useState([])
   
    useEffect(() => {

        const API = async () => {
            const product = (await axios.get(`http://localhost:4000/${id}`)).data
             setProduct([product])
        }
        API()

    }, [])

console.log(product)

    return (
    <div>
        <NavBar />
       {
        product.map(produc => {
            return(
                <div key={produc._id}>
                    <h1>{produc.title}</h1>
                    <h1>{produc.price}</h1>
                    <img src={produc.image} />
                    <p>{produc.description}</p>
                </div>
            )
        })
       }
    </div>
  )
}

export default Detail