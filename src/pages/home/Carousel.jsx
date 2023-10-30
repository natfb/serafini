import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/6.png';
import './Caroulsel.css'

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  
  const responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  };
  
  return (
       
    <div id="caroulsel" className="scroll-smooth carousel-container flex flex-col justify-center items-center overflow-hidden mx-auto mt-10 z-1">
    <h1 className='text-2xl lg:text-3xl font-bold my-7 scroll-smooth border-b-2 border-yellow-500 '>CATÁLOGO</h1>
      <AliceCarousel 
      autoplay={true}
      responsive={responsive} 
      infinite
      disableButtonsControls
      autoPlayInterval={100}
      className="z-1">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="sliderimg h-[60vh] lg:h-[70vh] m-auto px-0"
          />
        ))}
        
      </AliceCarousel>
    </div>
  );
};

export default Carousel;