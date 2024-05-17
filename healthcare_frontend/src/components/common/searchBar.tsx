import { IoIosSearch } from "react-icons/io";

const SearchBar: React.FC = () => {
    return (
        <>
        <section className="pt-4">
            <form id='search-bar'
             action="onSubmit" 
             className="md:ml-48 sm:ml-64 sm:pl-4 sm:pt-4 sm:mt-14 md:mt-24 lg-14">
                <div className="flex items-center px-2 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-80 mx-auto font-[sans-serif]">
                    <IoIosSearch className="h-5 w-5 mr-1 text-gray-500" />
                    <input 
                    type="search" 
                    placeholder="Search Here..." 
                    required
                    className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                    <button id='search-btn' type="submit" className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Search</button>
                </div>
            </form>
        </section>
        </>
    );
};

export default SearchBar;
