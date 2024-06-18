import React from 'react';
import img_404 from '../../assets/images/404.jpg';

const PageNotFound: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white-200 relative overflow-hidden">
      <div className="max-w-2xl w-full sm:w-3/4 md:w-3/4 lg:w-1/2 rounded-lg z-50 bg-white p-8 text-center shadow-xl relative">
        <img src={img_404} alt="404 Image" className="mx-auto mb-8 w-64" />
        <h1 className="mb-4 text-4xl font-bold text-blue-600">UH-OH</h1>
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <h3 className="text-gray-600 mb-8">
          Oops! The page you are looking for could not be found.
        </h3>
        <div className="space-x-4">
          <button
            onClick={goBack}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg rounded-lg text-sm px-5 py-2.5"
          >
            Go Back
          </button>
          <button
            onClick={goToHome}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg rounded-lg text-sm px-5 py-2.5"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
