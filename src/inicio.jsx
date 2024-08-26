import React from 'react';
import { useState } from 'react';
import imagem1 from './img/logo.svg';
import './css/inicio.css';
import idoso3 from './img/idoso3.svg';

import { Link } from 'react-router-dom';


function inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='cabecainicio'> 
      <img className='logo' src={imagem1}/>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <button className='jatemconta'><Link to="/login" >Já tenho uma conta</Link></button>
      </header>

<div className='lado'>
      <h1 className='tituloveio'>Conectando cuidadores e idosos com cuidado e dedicação</h1>
      <p className='paragrafo'>Seja bem-vindo ao lugar onde cuidado e dedicação se encontram para proporcionar conforto e qualidade de vida aos idosos.
        Cadastre-se para começar já!</p>
        <div className='botaos' >
    <button><Link to="/" >Sou idoso(a)</Link></button>
      <button><Link to="/" >Sou cuidador(a)</Link></button>
        </div>

      </div>

      <img className='idoso3' src={idoso3}/>
      
    
     
    </>
  )
}

export default inicio