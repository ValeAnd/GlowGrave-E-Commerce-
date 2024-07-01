import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const [cartCount] = useState(5)

  return (
    <>
      <NavBar cartCount={cartCount} title= "Tecnology" />
      <ItemListContainer greetings="Bienvenido a Tecnology"/>
    </>
  )
}

export default App
