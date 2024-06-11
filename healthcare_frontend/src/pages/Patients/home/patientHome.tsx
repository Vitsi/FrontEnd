// import React, { useEffect, useState } from 'react';
// import Navbar from "../../../components/common/navbar";
// import PatientSidebar from "../../../components/sidebar/patientSidebar";
// import SearchBar from "../../../components/common/searchBar";
// import HospitalCard from "../../../components/cards/hospitalCard";
// import PatientHero from "./patientHero";
// import LoadingSpinner from "../../../components/common/loadingSpinner";
// import img from '../../../assets/test4.jpg';
// import { fetchTotalCards } from '../../../services/hospitalCardsFetch';
// import Pagination from '../../../components/common/pagination';
// import MakeAppointment from './makeAppointment';

// const PatientHome: React.FC = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalCards, setTotalCards] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const cardsPerPage = currentPage === 1 ? 4 : 6;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const [selectedHospital, setSelectedHospital] = useState<any>(null);

//     const fetchTotalCardsData = async (page: number) => {
//         setLoading(true);
//         try {
//             const total = await fetchTotalCards(page);
//             setTotalCards(total);
//         } catch (error) {
//             console.error('Error fetching total cards:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchTotalCardsData(currentPage);
//     }, [currentPage]);

//     const handlePageChange = (pageNumber: number) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderHospitalCards = () => {
//         const startIndex = (currentPage - 1) * cardsPerPage;
//         const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
//         const hospitalCards = [];

//         for (let i = startIndex; i < endIndex; i++) {
//             const hospitalData = {
//                 name: `Hospital ${i}`,
//                 city: `City ${i}`,
//                 area: `Area ${i}`,
//                 rating: 4.5,
//                 imageUrl: img,
//                 speciality: `Speciality of hospital ${i}`,
//             };

//             hospitalCards.push(
//                 <HospitalCard
//                     key={i}
//                     {...hospitalData}
//                     onClick={() => setSelectedHospital(hospitalData)}
//                 />
//             );
//         }

//         return hospitalCards;
//     };

//     const handleRequestSubmit = (description: string, requestDate: string) => {
//         // Generate a unique ID for the new request
//         const requestId = Date.now();

//         // Simulate saving to database
//         const requestData = {
//             id: requestId, 
//             description,
//             requestDate,
//             patientFullName: 'Unknown Patient', // Example value
//             patientId: '123', // Example value
//             hospital: selectedHospital,
//             status: 'pending'
//         };

//         // Fetch existing pending requests from local storage (simulating database)
//         const existingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
//         // Combine existing requests with the new request
//         const updatedRequests = [...existingRequests, requestData];
//         // Store the updated requests in local storage
//         localStorage.setItem('pendingRequests', JSON.stringify(updatedRequests));

//         // Reset selected hospital after request is made
//         setSelectedHospital(null);
//     };

//     return (
//         <>
//             <Navbar isLoggedIn={true} />
//             <PatientSidebar />
//             <SearchBar />
//             <section>
//                 {currentPage === 1 && <PatientHero />}
//                 <div className="p-5 sm:ml-64">
//                     <div className="grid gap-4 md:grid-cols-2">
//                         {renderHospitalCards()}
//                     </div>
//                 </div>
//             </section>
//             {selectedHospital && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                     <MakeAppointment
//                         onRequestSubmit={handleRequestSubmit}
//                         onCancel={() => setSelectedHospital(null)}
//                     />
//                 </div>
//             )}
//             <div className="pagination grid place-items-center">
//                 <div className="md:ml-48 sm:ml-64 sm:pl-4 sm:pt-4">
//                     <Pagination
//                         currentPage={currentPage}
//                         totalCards={totalCards}
//                         onPageChange={handlePageChange}
//                         cardsPerPage={cardsPerPage}
//                     />
//                 </div>
//             </div>
//             {loading && <LoadingSpinner />}
//         </>
//     );
// };

// export default PatientHome;


import React, { useState } from 'react';
import Navbar from "../../../components/common/navbar";
import PatientSidebar from "../../../components/sidebar/patientSidebar";
import SearchBar from "../../../components/common/searchBar";
import HospitalCard from "../../../components/cards/hospitalCard";
import PatientHero from "./patientHero";
import LoadingSpinner from "../../../components/common/loadingSpinner";
import Pagination from '../../../components/common/pagination';
import MakeAppointment from './makeAppointment';
import hospitalTable, { Hospital } from '../../../dummyData/hospitalTable'; // Adjust the path as needed

const PatientHome: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading] = useState(false);
    const cardsPerPage = currentPage === 1 ? 4 : 6;
    const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    const renderHospitalCards = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, hospitalTable.length);
        const hospitalCards = 
        hospitalTable.slice(startIndex, endIndex).map(
            (hospital: Hospital) => {
            return (
                <HospitalCard
                    key={hospital.hospitalId}
                    hospitalFullName={hospital.hospitalFullName}
                    city={hospital.city}
                    area={hospital.area}
                    rating={hospital.rating}
                    imageUrl={hospital.imageUrl}
                    speciality={hospital.speciality}
                    phoneNumber={hospital.phoneNumber}
                    onClick={() => setSelectedHospital(hospital)}
                />
            );
        });

        return hospitalCards;
    };

    const handleRequestSubmit = (description: string, requestDate: string) => {
        const requestId = Date.now();

        const requestData = {
            id: requestId,
            description,
            requestDate,
            patientFullName: 'Unknown Patient', // Example value
            patientId: '123', // Example value
            hospital: selectedHospital,
            status: 'pending'
        };

        const existingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
        const updatedRequests = [...existingRequests, requestData];
        localStorage.setItem('pendingRequests', JSON.stringify(updatedRequests));

        setSelectedHospital(null);
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <PatientSidebar />
            <SearchBar />
            <section>
                {currentPage === 1 && <PatientHero />}
                <div className="p-5 sm:ml-64">
                    <div className="grid gap-4 md:grid-cols-2">
                        {renderHospitalCards()}
                    </div>
                </div>
            </section>
            {selectedHospital && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <MakeAppointment
                        onRequestSubmit={handleRequestSubmit}
                        onCancel={() => setSelectedHospital(null)}
                    />
                </div>
            )}
            <div className="pagination grid place-items-center">
                <div className="md:ml-48 sm:ml-64 sm:pl-4 sm:pt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalCards={hospitalTable.length}
                        onPageChange={handlePageChange}
                        cardsPerPage={cardsPerPage}
                    />
                </div>
            </div>
            {loading && <LoadingSpinner />}
        </>
    );
};

export default PatientHome;
