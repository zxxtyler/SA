import React, { useState } from 'react';
import './css/imageSlider.css'; // Importa o arquivo de estilo

const ImageSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <div className="slider-image-container">
        {/* Construct the image path dynamically */}
        <img 
          src={`../public/velhos/${data[currentIndex].imagem_perfil}`} 
          alt={data[currentIndex].nome_completo} 
        />
        <div className="overlay">
          <p>{data[currentIndex].nome_completo} ({data[currentIndex].idade})</p>
          <p>{data[currentIndex].localizacao.cidade},{data[currentIndex].localizacao.estado}</p>
          <p>{data[currentIndex].descricao_necessidades}</p>
        </div>
      </div>
      <button className="arrow left-arrow" onClick={goToPrevious}>
      {'<'}
      </button>
      <button className="arrow right-arrow" onClick={goToNext}>
      {'>'}
      </button>
    </div>
  );
};


export default ImageSlider;
