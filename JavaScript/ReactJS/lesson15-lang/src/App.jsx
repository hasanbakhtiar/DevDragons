import React, { useContext } from 'react'
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
import { ModeContext, ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';


const Main = () => {
    const [mode] = useContext(ModeContext);
    return (
        <div className={mode}>
            <div className="main-con">
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
            </div>
        </div>
    )
}



const App = () => {
    return (
        <BrowserRouter>
            <LangProvider>
                <ModeProvider>
                    <Main />
                </ModeProvider>
            </LangProvider>
        </BrowserRouter>
    )
}

export default App