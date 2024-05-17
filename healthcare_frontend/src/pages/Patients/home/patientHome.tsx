import React, { useEffect, useState } from 'react';
import Navbar from "../../../components/common/navbar";
import PatientSidebar from "../../../components/sidebar/patientSidebar";
import SearchBar from "../../../components/common/searchBar";
import HospitalCard from "./hospitalCard";
import PatientHero from "./patientHero";
import LoadingSpinner from "../../../components/common/loadingSpinner";
import img from '../../../assets/test4.jpg'
import { fetchTotalCards } from '../../../services/hospitalCards';

const PatientHome: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCards, setTotalCards] = useState(0);
    const [loading, setLoading] = useState(false);
    const maxButtonsToShow = 5;
    const cardsPerPage = currentPage === 1 ? 4 : 6; 

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
                name: `Hospital ${i}`,
                city: `City ${i}`,
                area: `Area ${i}`,
                rating: 4.5, 
                imageUrl: img,
                speciality: `Speciality of hospital ${i}`, 
            };
    
            hospitalCards.push(
                <HospitalCard
                    key={i}
                    {...hospitalData}
                />
            );
        }
    
        return hospitalCards;
    };
    
    const renderPaginationButtons = () => {
        const numPages = Math.ceil(totalCards / cardsPerPage);
        const middleButtonIndex = Math.floor(maxButtonsToShow / 2);
        const startPage = Math.max(1, currentPage - middleButtonIndex);
        const endPage = Math.min(numPages, startPage + maxButtonsToShow - 1);
        const paginationButtons = [];

        for (let i = startPage; i <= endPage; i++) {
            paginationButtons.push(
                <input
                    key={i}
                    id='pagenation'
                    // className="join-item btn btn-square"
                    className="join-item btn btn-square checked:bg-red-500 checked:text-white"                    type="radio"
                    name="options"
                    aria-label={String(i)}
                    checked={currentPage === i}
                    onChange={() => setCurrentPage(i)}
                />
            );
        }

        return paginationButtons;
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <PatientSidebar  />
            <SearchBar />
            <section >
                {currentPage === 1 && <PatientHero />} 
                <div className="p-5 sm:ml-64">
                    <div className="grid gap-4 md:grid-cols-2 ">
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

export default PatientHome;
