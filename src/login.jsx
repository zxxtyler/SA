import React from 'react';
import { useState } from 'react';
import imagem1 from './img/logo.svg';
import imagem2 from './img/idoso.svg';
import './css/cadastrologin.css';
import Cadastro from './cadastro';
import { Link } from 'react-router-dom';


function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header> 
      <img className='logo' src={imagem1}/>
        <a href="#">Home</a>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Ainda não tem uma conta? <Link to="/cadastro" >CLique aqui</Link></p>
      </header>

      <div className='container'>
        <img className='velho' src={imagem2}/> 
        <div className='login'>
        <h1>Login</h1>
        <p className='introducao'>Bom te ver novamente! Preencha as informações para entrar em sua conta!</p>
        <input type="text" placeholder='nome'/> 
        <br />
        <input type="text" placeholder='email'/>
        <br />
        <input type="text" placeholder='senha'/>
        <br />
        <center>
        <button className='logar'>Logar</button>
        </center> 
        <br />
        <center>
        <p>Ou entre por outro meio:</p>
        </center>      
      </div>
      </div>
      

      
      
     
    </>
  )
}

export default Login
