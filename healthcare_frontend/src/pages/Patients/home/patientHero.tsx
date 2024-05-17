import React, { useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const PatientHero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 4; 
    // Function to go to the previous slide
    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const imageUrls = [
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",       
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",        
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
        ];

    return (
        <>
            <section className='patient-hero mt-4'>
                <div className="p-2 sm:ml-64 ">
                    <div className="p-4 border-10 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div>
                            <div className="carousel w-full sm:h-48 md:h-48 lg:h-72 relative overflow-hidden">
                                {/* Loop over slides and render them */}
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <div key={index} className={`carousel-item relative w-full ${currentSlide === index ? 'block' : 'hidden'}`}>
                                        <img src={imageUrls[index]} className="w-full h-full" alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                                <div className='flex justify-between'>
                                <button className="absolute top-1/2 left-5 transform -translate-y-1/2" onClick={goToPreviousSlide}>
                                    <IoArrowBackCircleOutline  className="h-8 w-8 mr-1" />
                                </button>
                                <button className="absolute top-1/2 right-5 transform -translate-y-1/2" onClick={goToNextSlide}>
                                     <IoArrowForwardCircleOutline  className="h-8 w-8 mr-1" />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PatientHero;
