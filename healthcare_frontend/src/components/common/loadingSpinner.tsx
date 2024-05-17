import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
<span className="loading loading-spinner text-primary"></span>   

 </div>
  );
};

export default LoadingSpinner;
