import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './cadastro';
import Login from './login';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/cadastro' element={<Cadastro/>} />

          <Route path='/login' element={<Login/>} />
        </Routes>
     </Router>
    
    </>
  );
}

export default App;