import React from 'react';
import Navbar from '../../components/common/navbar';
import Footer from '../../components/common/footer';
import { FcCheckmark } from 'react-icons/fc'; // Import FcCheckmark icon from react-icons/fc

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <main className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 dark:bg-gray-900">
        <div className="pt-24 pb-14">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-800 dark:text-white">Services Offered</h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-blue-400">
              We provide a range of different services tailored to meet various needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 lg:space-x-0">
            {/* Service Card 1 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white mb-8">
              <h3 className="mr-2 text-5xl font-extrabold text-blue-800">Coming soon...</h3>
              
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold blur-sm">99 birr</span>
                <span className="text-gray-500 dark:text-gray-400 blur-sm">/month</span>
              </div>
              {/* List with blur effect */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <FcCheckmark className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className="blur-sm"><span className="font-semibold">3</span> Custom Features</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Add more list items */}
                </li>
              </ul>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900 transition duration-300 hover:blur-sm">
                Get started
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white mb-8">
              <h3 className="mr-2 text-5xl font-extrabold text-blue-800">Coming soon...</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold blur-sm">199 birr</span>
                <span className="text-gray-500 dark:text-gray-400 blur-sm">/month</span>
              </div>
              {/* List with blur effect */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <FcCheckmark className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className="blur-sm"><span className="font-semibold">5</span> Custom Features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcCheckmark className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className="blur-sm"><span className="font-semibold">5</span> Custom Features</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Add more list items */}
                </li>
              </ul>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900 transition duration-300 hover:blur-sm">
                Get started
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white mb-8">
              <h3 className="mr-2 text-5xl font-extrabold text-blue-800">Coming soon...</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold blur-sm">299 birr</span>
                <span className="text-gray-500 dark:text-gray-400 blur-sm">/month</span>
              </div>
              {/* List with blur effect */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <FcCheckmark className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className="blur-sm"><span className="font-semibold">Unlimited</span> Custom Features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcCheckmark className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className="blur-sm"><span className="font-semibold">Unlimited</span> Custom Features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcCheckmark className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className="blur-sm"><span className="font-semibold">Unlimited</span> Custom Features</span>
                </li>
              </ul>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900 transition duration-300 hover:blur-sm">
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
