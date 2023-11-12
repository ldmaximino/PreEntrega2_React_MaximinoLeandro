import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Error404 } from './components/Error404';
import { Footer } from './components/Footer';

import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />    
        <Route path="/category/:id" element={<ItemListContainer />} />   
        <Route path="/items/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
