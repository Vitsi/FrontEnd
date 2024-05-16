import { useState } from 'react';
import Card from '../components/card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react';

interface TestimonialsProps {
  reviews: {
    // Define the structure of your review object
    // For example:
    id: number;
    name: string;
    content: string;
  }[];
}

const Testimonials = (props: TestimonialsProps) => {
  const { reviews } = props;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
      <Card review={reviews[index]}></Card>

      <div className='flex mx-auto text-3xl mt-5 gap-3 text-red-400 font-bold'>
        <button onClick={leftShiftHandler} className='cursor-pointer hover:text-red-500'>
          <ChevronLeftIcon className='h-5 w-5' />
        </button>
        <button onClick={rightShiftHandler} className='cursor-pointer hover:text-red-500'>
          <ChevronRightIcon className='h-5 w-5' />
        </button>
      </div>
      <div className='mt-5'>
        <button onClick={surpriseHandler} className='bg-red-400 t-400 hover:bg-red-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
