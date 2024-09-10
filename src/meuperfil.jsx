import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/meuperfil.css';
import seta2 from './img/seta2.svg';
import estrela from './img/estrela.svg';
import aniversario from './img/aniversario.svg';
import email from './img/email.svg';
import foto from './img/foto.svg';
import certificado from './img/certificado.svg';
import perfil from './perfil';

function meuperfil() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='tudo2'>
        <div className='nhe'>
          <img src={seta2}/>
          <h1 className='textoperfil'>Perfil</h1>
        </div>
     
      
        <center>
            <div className='caixa'>
                <img className='foto' src={foto}/>
                <p className='jertrudes'>Jertrudes (73)</p>
                <img src={estrela} />

               
                <div className='divcolunasperfil'>
                  <div className='div1'>
                  <label className='label'>Minha Biografia
                  <Link className='label2' to="/perfil">Editar</Link>
                    <div className='bio'>
                      <p className='textobio'>biografia biografia biografia biografia biografia biografia biografia biografia biografia biografia</p>
                    </div>
                  </label>
                  </div>

                    <div className='div2'>
                      
                      <div className='divaniv'>
                      <img className='aniversario' src={aniversario}/>
                      <p className='textobio2'>09/05/1999</p>
                      </div>

                      <div className='divemail'>
                      <img className='email' src={email}/>
                      <p className='textobio2'>48 9999-9999</p>
                      </div>

                      <div className='divcertif'>
                      <img className='email' src={certificado}/>
                      <p className='textobio2'>Certificado</p>
                      </div>

                    </div>

                  </div>
                
            </div>
        </center>

        
      </div>
    </>

  )
}

export default meuperfil