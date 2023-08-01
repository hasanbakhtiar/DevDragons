import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import { ProductProvider } from './context/ProductProvider';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from 'react-use-cart';
import CartPage from './pages/CartPage';
const App = () => {
    return (
        <BrowserRouter>
          <CartProvider>
          <ProductProvider>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/products/:url' element={<ProductDetails />}></Route>
                        <Route path='/cart' element={<CartPage />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                    </Routes>
                </Container>
            </ProductProvider>
          </CartProvider>
        </BrowserRouter>
    )
}

export default App