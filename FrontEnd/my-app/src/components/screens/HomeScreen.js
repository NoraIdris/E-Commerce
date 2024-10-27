import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { Row, Col, Card} from 'react-bootstrap'


function HomeScreen() {

const [products, setProducts]=useState ([])

useEffect(()=>{
   async function fetchproducts(){
      const {data} = await axios.get('/api/products')
     // console.log(data)
     setProducts(data)
   }
   fetchproducts()
}, [])


  return (
    <Container>
      <br/>
      <h1> Products </h1>

      <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          
          <Card class name = "my-3 p-3 rounded">
          <img src='(products.image)' alt =''></img>
          </Card>
          
             <h3>{product.productname}</h3>
             <h6>{product.category}</h6>
             <p>{product.price}</p>
             <p>{product.productsinfo}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
