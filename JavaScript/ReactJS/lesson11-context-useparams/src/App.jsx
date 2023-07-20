import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import { ProductProvider } from './context/ProductProvider';
import ProductDetails from './pages/ProductDetails';
const App = () => {
    return (
        <BrowserRouter>
            <ProductProvider>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/products/:url' element={<ProductDetails />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                    </Routes>
                </Container>
            </ProductProvider>
        </BrowserRouter>
    )
}

export default App