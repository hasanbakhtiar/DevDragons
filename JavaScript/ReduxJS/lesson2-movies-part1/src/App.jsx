import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Header from './components/Header'
import Dashboard from './pages/admin/Dashbaord'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/admin' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App