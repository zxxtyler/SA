import React from 'react';
import { useState } from 'react';
import imagem1 from '../public/img/logo.png';
import imagem2 from '../public/img/idoso.png';
import imagem3 from '../public/icons/google.svg';
import './css/cadastrologin.css';
import Cadastro from './cadastro';
import { Link } from 'react-router-dom';
import './css/login.css';


function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header> 
      <img className='logo' src={imagem1}/>
       <p><Link to="/">Home</Link></p>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Ainda não tem uma conta? <Link to="/cadastro" >Clique aqui</Link></p>
      </header>

      <div className='container'>
        <img className='velho' src={imagem2}/> 
        <div className='login'>
        <h1>Login</h1>
        <p className='introducao'>Bom te ver novamente! Preencha as informações para entrar em sua conta!</p>
        <input type="text" placeholder='nome de usuário'/> 
        <br />
        <input type="text" placeholder='senha'/>
        <br />
        <center>
        <button className='logar'><Link className='logarbotao' to="/home">Logar</Link></button>
        </center> 
        <br />
        <center>
        <p>Ou entre por outro meio:</p>
        <img className='google' src={imagem3}/>
        </center>      
      </div>
      </div>
      

      
      
     
    </>
  )
}

export default Login
