import React from 'react';
import './css/inicio.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './cadastro';
import Login from './login';
import Inicio from './inicio';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Inicio/>} /> 
           
          <Route path='/cadastro' element={<Cadastro/>} />

          <Route path='/login' element={<Login/>} />
        </Routes>
     </Router>
    
    </>
  );
}

export default App;