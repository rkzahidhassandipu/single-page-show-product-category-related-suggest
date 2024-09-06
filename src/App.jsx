import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { Outlet } from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App