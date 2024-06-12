import React, { useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import img from '../../../assets/test4.jpg';
import img1 from '../../../assets/test 3.jpg';
import img2 from '../../../assets/test2.jpg';

const PatientHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to UNICARE',
      description: 'Your health is our priority. Find the best hospitals and make appointments easily.',
      imageUrl: img,
    },
    {
      title: 'Quality Care',
      description: 'We provide top-notch healthcare services to ensure your well-being.',
      imageUrl: img1,
    },
    {
      title: 'Experienced Doctors',
      description: 'Connect with highly qualified and experienced doctors.',
      imageUrl: img2,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className='patient-hero mt-4'>
                <div className="p-2 sm:ml-64 ">
                    <div className="p-4 border-10 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div className="relative w-full h-96 rounded overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between p-3 mt-24 z-10">
        <button onClick={prevSlide} className="text-white text-3xl">
          <IoArrowBackCircleOutline />
        </button>
        <button onClick={nextSlide} className="text-white text-3xl">
          <IoArrowForwardCircleOutline />
        </button>
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg md:text-2xl">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </section>
  );
};

export default PatientHero;
