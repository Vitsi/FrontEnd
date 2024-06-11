/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import HospitalCard from '../../../components/cards/hospitalCard';
import Pagination from '../../../components/common/pagination';
// import { MdDelete } from 'react-icons/md';

const AssignedHospitalRequests: React.FC = () => {
  const [assignedRequests, setAssignedRequests] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

  useEffect(() => {
    const storedRequests = localStorage.getItem('assignedHospitalRequests');
    if (storedRequests) {
      setAssignedRequests(JSON.parse(storedRequests));
    }
  }, []);

  const cancelAppointment = (id: number) => {
    const updatedRequests = assignedRequests.map((request) =>
      request.id === id ? { ...request, status: 'cancelled' } : request
    );
    setAssignedRequests(updatedRequests);
    localStorage.setItem('assignedHospitalRequests', JSON.stringify(updatedRequests));

    // Also update the status in pending requests
    const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
    const updatedPendingRequests = pendingRequests.map((request: any) =>
      request.id === id ? { ...request, status: 'cancelled' } : request
    );
    localStorage.setItem('pendingRequests', JSON.stringify(updatedPendingRequests));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // const deleteCanceledAppointments = () => {
  //   const updatedRequests = assignedRequests.filter(request => request.status !== 'cancelled');
  //   setAssignedRequests(updatedRequests);
  //   localStorage.setItem('assignedHospitalRequests', JSON.stringify(updatedRequests)); // Update localStorage
  //   const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
  //   const updatedPendingRequests = pendingRequests.filter((request: { status: string; }) => request.status !== 'cancelled');
  //   localStorage.setItem('pendingRequests', JSON.stringify(updatedPendingRequests)); // Update pendingRequests in localStorage
  // };
  

  const renderHospitalCards = () => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = assignedRequests.slice(indexOfFirstCard, indexOfLastCard).reverse();

    return currentCards.map((request) => (
      <div className={request.status === 'cancelled' ? 'cancelled-card' : ''} key={request.id}>
        <HospitalCard
          hospitalFullName={request.hospital.hospitalFullName}
          city={request.hospital.city}
          area={request.hospital.area}
          rating={request.hospital.rating}
          imageUrl={request.hospital.imageUrl}
          speciality={request.hospital.speciality}
          appointmentTime={request.status === 'cancelled' ? 'Cancelled' : request.requestDate}
          phoneNumber={'+251-911-2345'}
          showButtons={request.status !== 'cancelled'}
          onCancelAppointment={() => cancelAppointment(request.id)}
        />
      </div>
    ));
  };

  return (
    <>
      <section>
        <div className="p-5 sm:ml-64">
        
          {/* <button
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={deleteCanceledAppointments}
          >
            <MdDelete /> Delete Canceled Appointments
          </button>  */}
          <div className="grid gap-4 md:grid-cols-1">
            
            {renderHospitalCards()}</div>
        </div>
      </section>
      <div className="sm:ml-48">
        <Pagination
          currentPage={currentPage}
          totalCards={assignedRequests.length}
          onPageChange={handlePageChange}
          cardsPerPage={cardsPerPage}
        />
      </div>
    </>
  );
};

export default AssignedHospitalRequests;
