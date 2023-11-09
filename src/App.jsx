import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ItemListContainter } from './components/ItemListContainter'
import { NavBar } from './components/NavBar'
import { Error404 } from './components/Error404';

import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainter greeting="Nuestra lista de productos - Principal -" />} />    
        <Route path="/category/:id" element={<ItemListContainter greeting="Nuestra lista de categorías" />} />   
        <Route path="/items/:id" element={<div>Detalle</div>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
