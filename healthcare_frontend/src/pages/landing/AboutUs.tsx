import React from 'react';
import Navbar from '../../components/common/navbar';
import Footer from '../../components/common/footer';
import aboutImg from '../../assets/images/aboutUs_img.png'

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <main className="p-5 sm:ml">
      <div className="pt-24 pb-14">

        <div className="sm:flex items-center max-w-screen-xl mx-auto">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              {/* <img src="https://i.imgur.com/WbQnbas.png"  */}
              <img src={aboutImg} 
              
              alt="About Us" className="w-full" />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl ">
                About <span className="text-indigo-600">UniCare</span>
              </h2>
              <p className="text-gray-700">
                UniCare is committed to providing personalized healthcare solutions tailored to each individual's needs. With a focus on quality care and patient well-being, we strive to make healthcare accessible and effective for everyone. Our team of dedicated professionals ensures that you receive the best medical attention and support, making your health journey smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
