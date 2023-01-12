import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function HeroSlider() {
  const slides = [
    {
      url: '/assets/showcase-1.jpg',
    },
    {
      url: '/assets/showcase-2.jpg',
    },
    {
      url: '/assets/showcase-3.jpg',
    },

    {
      url: '/assets/showcase-4.jpg',
    },
    {
      url: '/assets/showcase-1.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  

  return (
    <div className='min-w-[35vw] w-[90vw] md:w-full relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' h-[40vh] md:w-full md:h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
       
    </div>
  );
}

export default HeroSlider






// import React from 'react'

// const HeroSlider = () => {
//   return (
//     <div className=' herobg-image flex flex-col items-center justify-center text-white p-[8rem] min-w-[35vw] rounded-lg'>
//          <h1 className='font-bold text-4xl'>Limburgse Aovendj 2023</h1>
//          <h2 className='text-3xl'>Zaterdag 4 Februari</h2>
//          <h2 className='text-3xl'>Brikke Oave, Brunssum</h2>
//     </div>
//   )
// }

// export default HeroSlider