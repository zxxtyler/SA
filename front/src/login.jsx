import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imagem1 from '../public/img/logo.png';
import imagem2 from '../public/img/idoso.png';
import './css/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Novo estado para senha
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Para redirecionar após login

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Usuário e senha corretos, redireciona para a home
      navigate('/home');
    } else {
      // Mostra erro
      setError(true);
    }
  };

  return (
    <>
      <header> 
        <img className='logo' src={imagem1}/>
        <p><Link to="/">Home</Link></p>
        <a href="#">Como funciona?</a>
        <a href="#">Benefícios</a>
        <a href="#">Sobre nós</a>
        <p className='separado'> Ainda não tem uma conta? <Link to="/cadastro">Clique aqui</Link></p>
      </header>

      <div className='container'>
        <img className='velho' src={imagem2}/> 
        <div className='login'>
          <h1>Login</h1><br/>

          <div className='divlogin'>
            <div>
              <input 
              type="text" 
              placeholder='nome de usuário' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className={error ? 'input-error' : ''}
            />
          </div>
         
          <div>
            <input 
                type="password" 
                placeholder='senha' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className={error ? 'input-error' : ''} // Input para senha
              />
          </div><br/>
          
          </div>
        

          {error && <p className='error-message'>Usuário ou senha incorretos!</p>}
          <center>
            <button className='logar' onClick={handleLogin}>Logar</button>
          </center> 
        </div>
      </div>
    </>
  );
}

export default Login;
