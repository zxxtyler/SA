import React from "react"
import imagem1 from '../public/img/logo.png';
import casa from '../public/icons/casa.svg';
import coracao from '../public/icons/coracao.svg';
import perfilpequeno from '../public/icons/perfilpequeno.svg';
import Velhos from "./data/velhos.json"
import ImageSlider from "./ImageSlider";
import print from "../public/img/print.png"
import './css/home.css'


function Home() {



    return (
        <div style={{backgroundColor:'#FFF8F3'}}>

            <header>
            <img className='logo' src={imagem1}/>
                <p className="carefulpeople">Careful people</p>
                <img className="casa" src={casa}/>
                <img className="coracao" src={coracao}/>
                <img className="perfilpequeno" src={perfilpequeno}/>
            </header>

            <main>
                    <ImageSlider data={Velhos}/>
                <div>
                    <img src={print} className="print"/>
                </div>
            </main>

        </div>
    )
}

export default Home