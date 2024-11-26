import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/meuperfil.css';
import seta2 from '../public/icons/seta2.svg';
import estrela from '../public/icons/estrela.svg';
import aniversario from '../public/icons/aniversario.svg';
import email from '../public/icons/email.svg';
import fotoPadrao from '../public/icons/foto.svg'; 
import certificado from '../public/icons/certificado.svg';

function Meuperfil() {
  const [userData, setUserData] = useState({
    username: '',
    photoUrl: fotoPadrao,
    dateOfBirth: '',
    phone: '',
    bio: '',
    certificate: '', 
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
      setUserData({
        username: storedUserData.username || 'Usuário',
        photoUrl: storedUserData.photoUrl || fotoPadrao,
        dateOfBirth: storedUserData.dateOfBirth || '', 
        phone: storedUserData.phone || '',
        bio: storedUserData.bio || '',
        certificate: storedUserData.certificate || '',
      });
    }
  }, []); 

 
  const formatDate = (date) => {
    if (!date) return 'Data não fornecida';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className='tudo2'>
      <div className='nhe'>
        <Link to="/home">
          <img src={seta2} alt="Voltar" />
        </Link>
        <h1 className='textoperfil'>Perfil</h1>
      </div>

      <center>
        <div className='caixa'>
          <img className='foto' src={userData.photoUrl} alt="Foto de Perfil" />
          <p className='jertrudes'>{userData.username}</p>
          <img src={estrela} alt="Estrela" />

          <div className='divcolunasperfil'>
            <div className='div1'>
              <label className='label'>
                Minha Biografia
                <Link className='label2' to="/perfil">Editar</Link>
                <div className='bio'>
                  <p className='textobio'>{userData.bio}</p>
                </div>
              </label>
            </div>

            <div className='div2'>
              <div className='divaniv'>
                <img className='aniversario' src={aniversario} alt="Aniversário" />
                <p className='textobio2'>{formatDate(userData.dateOfBirth)}</p>
              </div>

              <div className='divemail'>
                <img className='email' src={email} alt="Telefone" />
                <p className='textobio2'>{userData.phone}</p>
              </div>

              <div className='divcertif'>
                <img className='email' src={certificado} alt="Certificado" />
                <p className='textobio2'>{userData.certificate}</p>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Meuperfil;
