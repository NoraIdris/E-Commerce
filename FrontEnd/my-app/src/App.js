import React from 'react'
import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Footer from './components/Footer';




export default function App() {
  return (
  <>
  <div> 
    <NavBar />
    <Container>
    <h1>Welcome to my app </h1>
    </Container>
    <Footer />
  </div>
  </>
  )
}
