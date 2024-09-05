import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/meuperfil.css';
import seta2 from './img/seta2.svg';

function meuperfil() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='tudo2'>
    <div className='nhe'>
    <img src={seta2}/>
    <h1 className='textoperfil'>Perfil</h1>
    </div>
    </div>
    </>

  )
}

export default meuperfil