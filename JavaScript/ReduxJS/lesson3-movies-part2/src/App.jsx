import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Header from './components/Header'
import Dashboard from './pages/admin/Dashbaord'
import AddMovie from './pages/admin/update/AddMovie'
import EditMovie from './pages/admin/update/EditMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/admin' element={<Dashboard />}></Route>
        <Route path='/admin/add' element={<AddMovie />}></Route>
        <Route path='/admin/edit/:id' element={<EditMovie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App