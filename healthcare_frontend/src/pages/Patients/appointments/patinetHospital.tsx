import React, { useEffect, useState } from 'react';
import HospitalCard from "../../../components/cards/hospitalCard";
import LoadingSpinner from "../../../components/common/loadingSpinner";
import { fetchTotalCards } from '../../../services/hospitalCardsFetch';
import img from '../../../assets/test 3.jpg';

const PatientHospital: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCards, setTotalCards] = useState(0);
    const [loading, setLoading] = useState(false);
    const cardsPerPage = 4;

    const fetchTotalCardsData = async (page: number) => {
        setLoading(true);
        try {
            const total = await fetchTotalCards(page);
            setTotalCards(total);
        } catch (error) {
            console.error('Error fetching total cards:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTotalCardsData(currentPage);
    }, [currentPage]); // Trigger fetchTotalCards when currentPage changes

    const renderHospitalCards = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
        const hospitalCards = [];

        for (let i = startIndex; i < endIndex; i++) {
            const hospitalData = {
                hospitalFullName: `Hospital ${i}`,
                city: `City ${i}`,
                area: `Area ${i}`,
                rating: 4.5, 
                imageUrl: img,
                speciality: `Speciality of hospital ${i}`, 
            };

            hospitalCards.push(
                <HospitalCard
                key={i}
                showButtons={true}
                isPending={false}
                phoneNumber='09-00-00-00-00'
                appointmentTime='Mon-Jul-03 at 3:00'
                {...hospitalData}                />
            );
        }

        return hospitalCards;
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationButtons = () => {
        const numPages = Math.ceil(totalCards / cardsPerPage);
        const maxButtonsToShow = numPages <= 5 ? numPages : 5; // Maximum buttons to show
        const startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        const endPage = Math.min(startPage + maxButtonsToShow - 1, numPages);
        const paginationButtons = [];

        for (let i = startPage; i <= endPage; i++) {
            paginationButtons.push(
                <button
                    key={i}
                    className={`rounded-full px-4 py-2 ${currentPage === i ? 'bg-blue-500 text-white' : 'hover:bg-blue hover:text-gray-600 transition duration-300 ease-in-out'}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return paginationButtons;
    };
  
    return (
        <>
            <section >
                <div className="p-5 sm:ml-64">
                    <div className="grid gap-4 md:grid-cols-1 ">
                        {/* Render hospital cards based on current page */}
                        {renderHospitalCards()}
                    </div>
                </div>
            </section>
             {/* Pagination */}
             <div className="pagination grid place-items-center">
                <div className="md:ml-48 sm:ml-64 sm:pl-4 sm:pt-4">
                    <div className="join">
                        {renderPaginationButtons()}
                    </div>
                </div>
            </div>
            {loading && <LoadingSpinner />} 
        </>
    );
}
export default PatientHospital;
