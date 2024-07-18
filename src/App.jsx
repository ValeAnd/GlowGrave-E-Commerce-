import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros'
import Inicio from './components/Inicio/Inicio'


function App() {

  const [cartCount] = useState(5)

  return (
    <>
      <BrowserRouter>
          <NavBar cartCount={cartCount}/>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/productos' element={<ItemListContainer />}></Route>
            <Route path='/productos/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
