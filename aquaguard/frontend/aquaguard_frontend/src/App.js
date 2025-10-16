import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registro from "./registro";
import Login from "./login";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
