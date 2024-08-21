import { useState } from 'react';
import imagem1 from './img/logo.svg';
import imagem2 from './img/idoso.svg';
import './App.css';
import React from 'react';

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <>

    
      <header> 
      <div className='container'>
        <img className='velho' src={imagem2}/> 
        <div className='login'>
        <h1>Cadastro</h1>
        <p className='introducao'>Bom te ver! Preencha as informações para se cadastrar em sua conta!</p>
        <input type="text" placeholder='nome completo'/> 
        <br />
        <input type="text" placeholder='data de nascimento'/>
        <br />
        <input type="text" placeholder='telefone'/>
        <br />
        <center>
        <button className='logar'>Cadastrar</button>
        </center> 
           
      </div>
      </div>
      </header>
   
    </>
  )
}

export default Cadastro