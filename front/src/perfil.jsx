import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/perfil.css';
import seta from '../public/icons/seta.svg';
import estrela from '../public/icons/estrela.svg';
import fotoPadrao from '../public/img/velhapadrao.png'; 

function Perfil() {
  const [userData, setUserData] = useState({
    username: '',
    photoUrl: fotoPadrao,
    bio: '',
    needs: '',
    dateOfBirth: '',
    phone: '',
    certificate: '', 
  });

  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    needs: '',
    dateOfBirth: '',
    phone: '',
    certificate: '', 
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
      setUserData({
        username: storedUserData.username || 'Usuário',
        photoUrl: storedUserData.photoUrl || fotoPadrao,
        bio: storedUserData.bio || '',
        needs: storedUserData.needs || '',
        dateOfBirth: storedUserData.dateOfBirth || '',
        phone: storedUserData.phone || '',
        certificate: storedUserData.certificate || '', 
      });
      setFormData({
        username: storedUserData.username || '',
        bio: storedUserData.bio || '',
        needs: storedUserData.needs || '',
        dateOfBirth: storedUserData.dateOfBirth || '',
        phone: storedUserData.phone || '',
        certificate: storedUserData.certificate || '', 
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    
    const updatedUserData = {
      ...userData,
      ...formData,
    };
    setUserData(updatedUserData);
    localStorage.setItem('user', JSON.stringify(updatedUserData));
    alert('Dados atualizados com sucesso!');
  };

  return (
    <div className='tudo'>
      <div className='formulario'>
        <Link to="/meuperfil">
          <img className='seta' src={seta} alt="Voltar" />
        </Link>
        <div className='bloco11'>
          <h1 className='tituloedite'>Edite seu perfil</h1>
          <h2>{userData.username}</h2> 
          <img className='estrela' src={estrela} alt="Estrela" /><br />

          <div className='espaco'>

          <label>Nome
              <input
                className='nome'
                type="text"
                name="username"
                value={formData.username}
                placeholder='Insira seu nome'
                onChange={handleInputChange}
              />
            </label>
            
            <label>Biografia
              <input
                className='nome'
                type="text"
                name="bio"
                value={formData.bio}
                placeholder='Insira sua biografia'
                onChange={handleInputChange}
              />
            </label>

          

            <label>Data de nascimento
              <input
                className='nome'
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </label>

            <label>Número de telefone
              <input
                className='nome'
                type="text"
                name="phone"
                value={formData.phone}
                placeholder='Insira seu número'
                onChange={handleInputChange}
              />
            </label>

            <label>Certificado
              <input
                className='nome'
                type="text"
                name="certificate"
                value={formData.certificate}
                placeholder='Insira o certificado (URL ou descrição)'
                onChange={handleInputChange}
              />
            </label><br />
          </div>

          <button className='salvar-btn' onClick={handleSave}>Salvar Alterações</button>
        </div>
      </div>

      <div className='imagemvelha'>
        <img className='velha' src={userData.photoUrl} alt="Foto de Perfil" />
      </div>
    </div>
  );
}

export default Perfil;
