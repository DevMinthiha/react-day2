import React from 'react'
import "./App.css"
import Navbar from './Navbar'
import Products from './Products'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Products />
    </div>
  )
}

export default App
