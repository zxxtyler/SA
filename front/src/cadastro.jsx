import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imagem1 from '../public/img/logo.png';
import imagem3 from '../public/img/velho2.png';
import './css/cadastrologin.css';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [photoUrl, setPhotoUrl] = useState(''); 
  const navigate = useNavigate();

  const handleCadastro = () => {
    const userData = { username, dateOfBirth, phone, bio, password, photoUrl }; 
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/login');
  };
  


  
  return (
    <>
       <header> 
        <img className='logo' src={imagem1}/>
        <p className='home'><Link to="/">Home</Link></p>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Ainda não tem uma conta? <Link to="/cadastro">Clique aqui</Link></p>
      </header>


      <div className='container'>
        <img className='velho' src={imagem3} alt="Imagem de idoso"/> 
        <div className='login'>
          <h1 className='cadastr'>Cadastro do idoso</h1>

          <div className='inputscadastro'>
          <input className='inputmedio' type="text" placeholder='Nome de usuário' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className='inputmedio' type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        
            
            <input 
              className='inputmedio' 
              type="text" 
              placeholder='URL da foto de perfil' 
              value={photoUrl} 
              onChange={(e) => setPhotoUrl(e.target.value)} 
            />
            
            {photoUrl && <img className='fotoperfil' src={photoUrl} alt="Prévia da foto" />}

            <input className='inputmedio' type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            <input className='inputmedio' type="text" placeholder='Telefone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <textarea className='inputmaior' placeholder='Biografia' value={bio} onChange={(e) => setBio(e.target.value)} />

            <center>
            <button className='logar' onClick={handleCadastro}>Cadastrar</button>
            </center> 
          </div>
         
          
        </div>
      </div>
    </>
  );
}

export default Cadastro;
