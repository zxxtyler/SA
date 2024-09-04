import React from 'react';
import { useState } from 'react';
import './css/perfil.css';
import seta from './img/seta.svg';
import estrela from './img/estrela.svg';
import velha from './img/velha.svg';
import { Link } from 'react-router-dom';

function perfil() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <div className='tudo'>

      
        <img className='seta' src={seta}/>

        <h1 className='tituloedite'>Edite seu perfil.</h1>
        <h2>Jertrudes(73)</h2>
        <img src={estrela}/>

        <label>Biografia
            <input className='nome' type="text"/>
        </label>

        <label>Nome
            <input className='nome' type="text"/>
        </label>

        <label>Necessidade
            <input className='nome' type="text"/>
        </label>
 
        <label>Data de nascimento
                    <input className='nome' type="date"/>
                </label>

                <label>Número de telefone
                    <input className='nome' type="text"/>
                </label>
    
        

        <img className='velha' src={velha} alt="" />


        </div>
</>
  )
}

export default perfil