import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import SignupScreen from './components/screens/SignupScreen';
import LoginScreen from './components/screens/LoginScreen';
import CartScreen from './components/screens/CartScreen';
import ProductScreen from './components/screens/ProductScreen';




export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Container>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/product/:id" element={<ProductScreen />} />
              <Route exact path="/login" element={<LoginScreen />} />
              <Route exact path="/signup" element={<SignupScreen />} />
              <Route exact path="/cart" element={<CartScreen />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </div>
    </>
  );
}
