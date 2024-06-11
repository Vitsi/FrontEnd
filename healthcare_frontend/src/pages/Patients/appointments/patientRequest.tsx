/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import HospitalCard from "../../../components/cards/hospitalCard";
import LoadingSpinner from "../../../components/common/loadingSpinner";
import Pagination from '../../../components/common/pagination';

const PatientRequest: React.FC = () => {
    const [requests, setRequests] = useState<any[]>([]);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(4);

    useEffect(() => {
        const pendingRequests = localStorage.getItem('pendingRequests');
        if (pendingRequests) {
            let requestsData = JSON.parse(pendingRequests);
            requestsData = requestsData.map((request: any) => ({
                ...request,
                patientFullName: request.patientFullName || 'Default Patient',
            }));
            setRequests(requestsData);
        }
    }, []);

    const cancelAppointment = (index: number) => {
        const updatedRequests = [...requests];
        updatedRequests.splice(index, 1);
        setRequests(updatedRequests);
        localStorage.setItem('pendingRequests', JSON.stringify(updatedRequests));
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = requests.slice(indexOfFirstCard, indexOfLastCard);

    const renderHospitalCards = () => {
        return currentCards.map((request, index) => (
            <HospitalCard
                key={index}
                hospitalFullName={request.hospital.name}
                city={request.hospital.city}
                area={request.hospital.area}
                rating={request.hospital.rating}
                imageUrl={request.hospital.imageUrl}
                speciality={request.hospital.speciality}
                showButtons={true}
                isPending={true}
                appointmentTime={request.date}
                phoneNumber={'+251-911-2345'}
                onCancelAppointment={() => cancelAppointment(index)} 
            />
        ));
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <section>
                <div className="p-5 sm:ml-64">
                    <div className="grid gap-4 md:grid-cols-1">
                        {renderHospitalCards()}
                    </div>
                </div>
            </section>
            <div className="sm:ml-48">
                <Pagination
                    currentPage={currentPage}
                    totalCards={requests.length}
                    onPageChange={handlePageChange}
                    cardsPerPage={cardsPerPage}
                />
            </div>
            {loading && <LoadingSpinner />}
        </>
    );
};

export default PatientRequest;
