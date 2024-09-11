import React from 'react';
import { useState } from 'react';
import './css/perfil.css';
import seta from '../public/icons/seta.svg';
import estrela from '../public/icons/estrela.svg';
import velha from '../public/img/velhapadrao.png';
import { Link } from 'react-router-dom';

function perfil() {
    const [count, setCount] = useState(0)
  
    return (

    <div className='tudo'>
      
        
        <div className='formulario'>
            <img className='seta' src={seta}/>
            <div className='bloco11'>
            <h1 className='tituloedite'>Edite seu perfil.</h1>
            <h2>Jertrudes(73)</h2>
            <img className='estrela' src={estrela}/><br/>

            <div className='espaco'>
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
                    </div>
        </div>
        </div>

        <div className='imagemvelha'>
                <img className='velha' src={velha} alt="" />
        </div>
    </div>
 
  )
}

export default perfil