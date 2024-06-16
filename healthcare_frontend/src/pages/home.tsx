import React from 'react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';
import svg from '../assets/images/heroimage.png';
import logo from '../assets/images/logos/logowhiteleaf.png';
import FeatureSection from '../components/features';
// import Testimonial from '../components/testimonials';
import Cta from '../components/cta';
import Testimonials from '../components/testimonials';
import testimonialsData from '../components/cards/testimonialCards';

const Home: React.FC = () => {
    return (
        <>
            <Navbar isLoggedIn={false}/>
            <main className='landing-page mt-14'>
                {/* Hero Section */}
                <section className="bg-gray-900 text-white py-20">
                    <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                        <div
                            className="lg:flex-grow mt-15 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 ml-20 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1
                                className="text-2xl  leading-9 tracking-tight mb-3 text-gray-1000 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                                <img src={logo} alt="Logo" /> we do care!
                            </h1>
                            <p className="mb-8 md:pl-0  pl-2 pr-5 leading-relaxed dark:text-gray-300">
                                Your health is an investment, not an expense!
                                He who has health, has hope; and he who has hope, has everything.
                            </p>
                            <div id='hero-btns' className="flex justify-center">
                                <a href="/signin"> <button id='btn1' className="btn inline-flex text-gray-700 bg-emerald-600 border-0 py-2 px-6 focus:outline-none rounded">
                                    Book Appointment
                                </button> </a>
                                {/* <a href="/signin"> <button id='btn2' className="btn ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded">
                                    Healthcare provider
                                </button> </a> */}
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6 ml-20 md:block hidden">
                            <img src={svg} alt="black lady" />
                        </div>
                    </div>
                </section>        
                {/* Features Section */}
                 <FeatureSection />
                {/* Call to action section */}
                <Cta />
                {/* Testimonials Section */}
                
                <Testimonials testimonials={testimonialsData} />
              
            </main>
           
            <Footer />
        </>
    );
}

export default Home;

