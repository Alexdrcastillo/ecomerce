import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const CardProducts = () => {
  const products = useSelector(state => state.product.products)

  console.log(products)

  return (
    <div style={{width: "90rem", marginLeft: "200px"}}>
  
   <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", marginLeft: "3rem"}}>
       {
        products.map(product => {
               return(
                <Link to={`/detail/${product._id}`} style={{textDecoration:"none"}}>
                <div style={{margin: "3rem", flexWrap: "wrap", marginTop: "8rem"}}>
                <Card sx={{ maxWidth: 220 }} style={{backgroundColor:'#f5f5f5'}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent style={{height: "13rem"}}>
                    <Typography gutterBottom variant="h5" component="div">
                     {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
                </div>
       </Link>
               )
        })
       }
   </div>
    </div>
  )
}

export default CardProducts