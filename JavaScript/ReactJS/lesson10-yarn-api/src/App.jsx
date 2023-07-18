import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App