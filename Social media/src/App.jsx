
import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import './App.css'

export default function App() {
  return (
    <div className='item_container'>
      <Sidebar></Sidebar>
      <div>

        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  )
}
