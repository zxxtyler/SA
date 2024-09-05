import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/meuperfil.css';
import seta2 from './img/seta2.svg';
import estrela from './img/estrela.svg';

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
                <p className='jertrudes'>Jertrudes (73)</p>
                <img src={estrela} />
            </div>
        </center>
      </div>
    </>

  )
}

export default meuperfil