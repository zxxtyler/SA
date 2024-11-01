import React from 'react';
import { useState } from 'react';
import imagem1 from '../public/img/logo.png';
import imagem3 from '../public/img/velho2.png';
import imagem4 from '../public/icons/fotoperfil.svg';
import './css/cadastrologin.css';
import login from './login';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <>

<header> 
      <img className='logo' src={imagem1}/>
        <p><Link to="/">Home</Link></p>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Já tem uma conta? <Link to="/login" >Clique aqui</Link></p>
      </header>

       
      <div className='container'>
        <img className='velho' src={imagem3}/> 
        <div className='login'>
        <h1 className='cadastr'>Cadastro</h1>
        <p className='introducao'>Bom te ver! Preencha as informações para se cadastrar em sua conta!</p>
        <input className='inputmedio' type="text" placeholder='nome de usuário'/> 
        <br />


        <div className='doisinputs'>
        <img className='fotoperfil' src={imagem4} />
        <div className='coluna'>
        <input className='inputpequeno' type="date" placeholder='data de nascimento'/>
        <br />
        <input className='inputpequeno' type="text" placeholder='telefone'/>
        </div>
        </div>

        <br />
        <textarea className='inputmaior' placeholder='Biografia'></textarea>
        <br />
        <center>
        <button className='logar'><Link className='logarbotao' to="/home">Cadastrar</Link></button>
        </center> 
           
      </div>
      </div>
      
   
    </>
  )
}

export default Cadastro