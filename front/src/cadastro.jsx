import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imagem1 from '../public/img/logo.png';
import imagem3 from '../public/img/velho2.png';
import imagem4 from '../public/icons/fotoperfil.svg';
import './css/cadastrologin.css';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const navigate = useNavigate(); // Para redirecionar após cadastro

  const handleCadastro = () => {
    const userData = { username, dateOfBirth, phone, bio };
    // Salva o usuário no localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <>
      <header> 
        <img className='logo' src={imagem1}/>
        <p><Link to="/">Home</Link></p>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Já tem uma conta? <Link to="/login">Clique aqui</Link></p>
      </header>

      <div className='container'>
        <img className='velho' src={imagem3}/> 
        <div className='login'>
          <h1 className='cadastr'>Cadastro</h1>
          <input className='inputmedio' type="text" placeholder='nome de usuário' value={username} onChange={(e) => setUsername(e.target.value)} />
          <div className='doisinputs'>
            <img className='fotoperfil' src={imagem4} />
            <div className='coluna'>
              <input className='inputpequeno' type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              <input className='inputpequeno' type="text" placeholder='telefone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <textarea className='inputmaior' placeholder='Biografia' value={bio} onChange={(e) => setBio(e.target.value)} />
          <center>
            <button className='logar' onClick={handleCadastro}>Cadastrar</button>
          </center> 
        </div>
      </div>
    </>
  )
}

export default Cadastro;
