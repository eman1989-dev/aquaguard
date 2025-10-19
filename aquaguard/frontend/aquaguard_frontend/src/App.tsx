import './App.css'
import Home from './Inicio'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
