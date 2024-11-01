import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/meuperfil.css';
import seta2 from '../public/icons/seta2.svg';
import estrela from '../public/icons/estrela.svg';
import aniversario from '../public/icons/aniversario.svg';
import email from '../public/icons/email.svg';
import foto from '../public/icons/foto.svg';
import certificado from '../public/icons/certificado.svg';
import perfil from './perfil';

function meuperfil() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='tudo2'>
        <div className='nhe'>
          <Link to="/home">
          <img src={seta2}/>
          </Link>
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