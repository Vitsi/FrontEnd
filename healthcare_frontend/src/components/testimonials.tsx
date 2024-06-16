import React, { useState, useEffect } from 'react';
import { MdFormatQuote } from 'react-icons/md';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    image: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="w-full 
        max-w-3xl mx-auto 
        text-center
        h-[450px] 
        ">
            {/* Testimonial image */}
            <div className="relative h-48 mb-8">
                <div className="absolute top-0 left-1/2 
                transform -translate-x-1/2
                 w-[480px] h-[480px] 
                 pointer-events-none before:absolute
                  before:inset-0 before:bg-gradient-to-b
                   before:from-indigo-500/25 
                   before:via-indigo-500/5  
                   before:to-indigo-500/0 before:to-75%
                   before:rounded-full before:-z-10
                   ">
                    <div className="h-48">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`
                                  absolute inset-0 flex 
                                  justify-center items-center 
                                  transition-opacity duration-700 
                                  ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'} ${index === activeIndex ? 'active' : ''}`}
                                style={{
                                    transform: `rotate(${index === activeIndex ? '0' : '360'}deg)`,
                                    transition: 'transform 1s ease-in-out'
                                }}
                            >
                                <img
                                    className="relative 
                                    bottom-48 left-20
                                     -translate-x-20
                                    rounded-full
                                     border-2 border-blue-600
                                    "
                                    src={testimonial.image}
                                    width="128"
                                    height="128"
                                    alt={testimonial.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Text */}
            <div className="mb-9">
                <div className="relative flex flex-col transition-all duration-700 ease-in-out">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="text-2xl font-bold text-gray-900">
                                <MdFormatQuote className="inline-block mr-3 text-3xl" />
                                {testimonial.content}
                                <MdFormatQuote className="inline-block ml-3 text-3xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
                {testimonials.map((testimonial, index) => (
                    <button
                        key={index}
                        className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-10 text-sm font-semibold shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 dark:focus:ring-slate-600 transition-colors duration-150 ${index === activeIndex ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-gray-900'}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {testimonial.name} - {testimonial.role}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;

