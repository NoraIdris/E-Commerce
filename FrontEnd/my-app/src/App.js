import React from 'react'
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';




export default function App() {
  return (
  <>
  <div> 
    <Header />
    <Container>
    <h1>Welcome to my app </h1>
    </Container>
    <Footer />
  </div>
  </>
  )
}
