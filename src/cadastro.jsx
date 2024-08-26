import React from 'react';
import { useState } from 'react';
import imagem1 from './img/logo.svg';
import imagem3 from './img/velho2.svg';
import './css/cadastrologin.css';
import login from './login';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <>

<header> 
      <img className='logo' src={imagem1}/>
        <a href="#">Home</a>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Já tem uma conta? <Link to="/login" >CLique aqui</Link></p>
      </header>

      <header> 
      <div className='container'>
        <img className='velho' src={imagem3}/> 
        <div className='login'>
        <h1>Cadastro</h1>
        <p className='introducao'>Bom te ver! Preencha as informações para se cadastrar em sua conta!</p>
        <input type="text" placeholder='nome completo'/> 
        <br />
        <input type="text" placeholder='data de nascimento'/>
        <br />
        <input type="text" placeholder='telefone'/>
        <br />
        <input type="text" placeholder='Biografia'/>
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