import './App.css'
import Home from './Inicio'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Sobre_nosotros from './Sobre_nosotros';
import Footer from './Footer';
import Productos from './Productos';
import Contacto from './Contacto';

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre-nosotros' element={<Sobre_nosotros/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
