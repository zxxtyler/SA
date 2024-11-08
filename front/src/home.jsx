import React from "react";
import { useState } from 'react';
import imagem1 from '../public/img/logo.png';
import casa from '../public/icons/casa.svg';
import coracao from '../public/icons/coracao.svg';
import perfilpequeno from '../public/icons/perfilpequeno.svg';
import Velhos from "./data/velhos.json";
import ImageSlider from "./ImageSlider";
import './css/home.css';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <>

        <div className="fundohome">

            <header className="headerhome">
            <img className="logohome"  src={imagem1}/>
                <p className="carefulpeople">CAREFUL PEOPLE</p>
                    <div className="mematei">
                    <img className="casa" src={casa}/>
                    <img className="coracao" src={coracao}/>
                    <Link to="/meuperfil">
                    <img className="perfilpequeno" src={perfilpequeno}/>
                    </Link>
                    </div>
                    
            </header>

            <main>
                <div>
                    <ImageSlider className="carrossel" data={Velhos}/>
                </div>
            </main>

        </div>
        </>
    )
}

export default Home