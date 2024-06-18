import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar: React.FC = () => {
    return (
        <section className="sm:pt-10">
            <form 
                id="search-bar"
                action="onSubmit" 
                className="relative
                md:ml-48 sm:ml-64 
                sm:pl-4 sm:pt-4 sm:mt-14 
                 lg:mt-14
                ">
                <div className="flex 
                items-center bg-white 
                border border-gray-300 rounded-full shadow-lg 
                overflow-hidden max-w-sm mx-auto">
                    <input 
                        type="text"
                        className="w-full 
                        py-3 px-6 leading-tight
                         focus:outline-none text-gray-700 text-lg"
                        placeholder="Search for hospitals, doctors, services..."
                    />
                    <button type="submit" 
                    className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-700 transition duration-300 ">
                        <IoIosSearch className="h-6 w-6" />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SearchBar;
