import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-20">
      <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-700"></div>
    </div>
  );
};

export default LoadingSpinner;
