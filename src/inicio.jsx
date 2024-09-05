import React from 'react';
import { useState } from 'react';
import imagem1 from './img/logo.svg';
import './css/inicio.css';
import idoso3 from './img/idoso3.svg';
import Login from './login';

import { Link } from 'react-router-dom';


function inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='cabecainicio'>
        <img className='logo' src={imagem1} />
        <a href="#teste">Como funciona?</a>
        <a href="#bene">Benefícios</a>
        <a href="#">Sobre nós</a>
        <Link className='jatemconta' to="/login">Já tenho uma conta</Link>
      </header>

      <div className='divimagem'>
        <div className='lado'>
          <h1 className='tituloveio'>Conectando cuidadores e idosos com cuidado e dedicação</h1>
          <p className='paragrafo'>Seja bem-vindo ao lugar onde cuidado e dedicação se encontram para proporcionar conforto e qualidade de vida aos idosos.
            Cadastre-se para começar já!</p>
          <div className='botaos' >
            <Link className="buttoninicio" to="/cadastro" >Sou idoso(a)</Link>
            <Link className="buttoninicio" to="/cadastrocuidador" >Sou cuidador(a)</Link>
          </div>
        </div>
        <img className='idoso3' src={idoso3} />

      </div>

      <section className='fundo'>

        <section id='teste'>
        <center>
          <h2 className='segundotitulo'>Como funciona?</h2>
        </center>
        

        <div className='blocos'>
          <div>
            <h2>Cadastro Simples</h2>
            <p className='texto'>Tanto os idosos quanto os cuidadores podem se cadastrar facilmente no nosso site. Os idosos ou seus familiares preenchem um perfil detalhado sobre as necessidades específicas de cuidados, dados de localização, identidade e entre outros.</p>
          </div>

          <div>
            <h2>Comunicação Segura</h2>
            <p className='texto'>Uma vez que uma correspondência é feita, os idosos e os cuidadores podem se comunicar de forma segura através do nosso sistema de mensagens interno. </p>
          </div>
          
          <div>
            <h2>Correspondência Personalizada</h2>
            <p className='texto'>Com base nas informações fornecidas no cadastro, nosso algoritmo inteligente faz correspondências entre os idosos e os cuidadores. Isso é feito levando em consideração a localização e as necessidades específicas relatadas.</p>
          </div>

          <div>
            <h2>Avaliações e feedback</h2>
            <p className='texto'>Após cada interação entre o idoso e o cuidador, ambos têm a oportunidade de deixar avaliações e feedbacks. Isso ajuda a manter a qualidade do serviço e a construir uma comunidade de confiança dentro da nossa plataforma.</p>
          </div>
          

          </div>
          </section>

      </section>

      <section id='bene' className='beneficios'>
      <center>
          <h2 className='segundotitulo'>Benefícios</h2>
        </center>

        <div className='blocos'>
          <div>
            <h2>Personalização para Atender às Suas Necessidades Únicas</h2>
            <p className='texto'>Entendemos que cada situação é única e que as necessidades de cada idoso variam. É por isso que oferecemos um processo personalizado de correspondência, no qual consideramos as preferências individuais, rotinas e requisitos médicos de cada cliente para garantir uma combinação perfeita com um cuidador compatível.</p>
          </div>

          <div>
            <h2>Facilidade e Tranquilidade para as Famílias</h2>
            <p className='texto'>Entendemos que cuidar de um ente querido idoso pode ser desafiador e, muitas vezes, esmagador. É por isso que nos esforçamos para tornar o processo de encontrar um cuidador simples, transparente e sem estresse. Com nossa plataforma, as famílias podem descansar tranquilas, sabendo que seus entes queridos estão em boas mãos. </p>
          </div>
          
          <div>
            <h2>Escolha confiança, escolha nosso serviço</h2>
            <p className='texto'>Quando se trata do bem-estar e conforto dos nossos entes queridos mais velhos, a confiança é essencial. É por isso que estamos aqui para oferecer a você um serviço que não apenas encontra cuidadores dedicados, mas também traz paz de espírito e qualidade de vida para os idosos que você ama.</p>
          </div>

          </div>
      </section>

    
    <section id='sobre'>
      <div className='fundosobre'>
      <center>
      <h1>Fale conosco</h1>
      <p className='sobretexto'>pipipipipi_ipipip@gmail.com</p>
      <p className='sobretexto'>(48)0000-0000</p>
      </center>
      </div>
    </section>




    </>
  )
}

export default inicio