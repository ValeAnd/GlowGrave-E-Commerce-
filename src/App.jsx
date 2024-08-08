import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros'
import Inicio from './components/Inicio/Inicio'
import { CartContext, CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'


function App() {


  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/productos' element={<ItemListContainer />}></Route>
            <Route path='/productos/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
            <Route path='/carrito' element={<Carrito/>}></Route>
          </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
