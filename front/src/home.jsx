import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import imagem1 from '../public/img/logo.png';
import casa from '../public/icons/casa.svg';
import coracao from '../public/icons/coracao.svg';
import perfilpequeno from '../public/icons/perfilpequeno.svg'; // Imagem padrão
import Velhos from "./data/velhos.json";
import ImageSlider from "./ImageSlider";
import './css/home.css';

function Home() {
  const [userPhoto, setUserPhoto] = useState(perfilpequeno); // Estado com imagem padrão

  useEffect(() => {
    // Busca os dados do usuário no localStorage ao carregar a página
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.photoUrl) {
      setUserPhoto(userData.photoUrl); // Define a foto do usuário, se existir
    }
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div className="fundohome">
      <header className="headerhome">
        <img className="logohome" src={imagem1} alt="Logo"/>
        <p className="carefulpeople">CAREFUL PEOPLE</p>
        <div className="divhome">
          <img className="casa" src={casa} alt="Casa"/>
          <img className="coracao" src={coracao} alt="Coração"/>
          <Link to="/meuperfil">
            <img className="perfilpequeno" src={userPhoto} alt="Perfil"/> {/* Exibe a foto do usuário */}
          </Link>
        </div>
      </header>

      <main>
        <div>
          <ImageSlider className="carrossel" data={Velhos}/>
        </div>
      </main>
    </div>
  );
}

export default Home;
