import React from 'react';
import './css/inicio.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './cadastro';
import Login from './login';
import Inicio from './inicio';
import Cadastrocuidador from './cadastrocuidador';
import Perfil from './perfil';
import Meuperfil from './meuperfil';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Inicio/>} /> 
           
          <Route path='/cadastro' element={<Cadastro/>} />

          <Route path='/cadastrocuidador' element={<Cadastrocuidador/>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/perfil' element={<Perfil/>} />

          <Route path='/meuperfil' element={<Meuperfil/>} />

        </Routes>
     </Router>
    
    </>
  );
}

export default App;