import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from './Context/Context'

const App = () => {
  return (
    <Provider>
      <Navbar />
      <Outlet />
    </Provider>
  )
}

export default App