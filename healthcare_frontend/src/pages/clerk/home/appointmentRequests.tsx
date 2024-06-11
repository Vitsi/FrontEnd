/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, ChangeEvent } from 'react';
import Navbar from '../../../components/common/navbar';
import Pagination from '../../../components/common/pagination';
import AppointmentModal from './appointmentModal';

interface Request {
  id: number;
  patientId: string;
  patientFullName: string;
  description: string;
  requestDate: string;
  status: string;
  doctorId: number;
  hospital: {
    hospitalFullName: string;
    city: string;
    area: string;
    imageUrl: string;
    rating: number;
    speciality: string;
  };
}


const AppointmentRequests: React.FC = () => {
  const [appointmentRequests, setAppointmentRequests] = useState<Request[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRequestDate, setModalRequestDate] = useState('');

  useEffect(() => {
    const pendingRequests = localStorage.getItem('pendingRequests');
    if (pendingRequests) {
      const requests: Request[] = JSON.parse(pendingRequests).map((request: any, index: number) => ({
        ...request,
        patientFullName: request.patientFullName || 'Unknown Patient',
        id: request.id ?? index // Ensure each request has a unique id
      }));
      setAppointmentRequests(requests.reverse());
    }
  }, []);

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAccept = (id: number) => {
    const request = appointmentRequests.find(request => request.id === id);
    if (request) {
      setSelectedRequest(request);
      setModalRequestDate(request.requestDate);
      setIsModalOpen(true);
    }
  };

  const handleDecline = (id: number) => {
    const updatedRequests = appointmentRequests.map(request => {
      if (request.id === id) {
        // Update status to 'cancelled'
        request.status = 'cancelled';
        // Update status in localStorage
        const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
        const updatedPendingRequests = pendingRequests.map((pendingRequest: any) =>
          pendingRequest.id === id ? { ...pendingRequest, status: 'cancelled' } : pendingRequest
        );
        localStorage.setItem('pendingRequests', JSON.stringify(updatedPendingRequests));
      }
      return request;
    });
    setAppointmentRequests(updatedRequests);
  };
  
  const handleAssign = (doctorId: number, timeSlot: string) => {
    if (selectedRequest) {
      if (selectedRequest.status === 'cancelled') {
        alert('This request has been cancelled and cannot be reassigned.');
        return;
      }
  
      const assignedRequest = {
        ...selectedRequest,
        status: 'assigned',
        description: `${selectedRequest.description} `,
        doctorId,
        requestDate: timeSlot,
        hospital: {
          hospitalFullName: selectedRequest.hospital.hospitalFullName,
          city: selectedRequest.hospital.city,
          area: selectedRequest.hospital.area,
          rating: selectedRequest.hospital.rating,
          imageUrl: selectedRequest.hospital.imageUrl,
          speciality: selectedRequest.hospital.speciality,
        },
      };
      const updatedRequests = appointmentRequests.map((request) =>
        request.id === selectedRequest.id ? assignedRequest : request
      );
      setAppointmentRequests(updatedRequests);
      localStorage.setItem('pendingRequests', JSON.stringify(updatedRequests));
      setIsModalOpen(false);
  
      // Move the assigned request to the assigned hospital page in the patient's page
      const assignedHospitalRequests = JSON.parse(localStorage.getItem('assignedHospitalRequests') || '[]');
      assignedHospitalRequests.push(assignedRequest);
      localStorage.setItem('assignedHospitalRequests', JSON.stringify(assignedHospitalRequests));
    }
  };
  

  const filteredRequests = appointmentRequests.filter((request) =>
    request.patientFullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="p-5 sm:ml-64 md:p-3">
        <h1 className="text-2xl font-bold mb-4">Appointment Requests</h1>
        <input
          type="text"
          placeholder="Search by patient name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Pending Requests</h2>
            <ul className="border border-gray-300 rounded p-4">
              {currentRequests.map((request) => (
                <li
                  key={request.id}
                  className="border-b border-gray-200 py-2 cursor-pointer"
                  onClick={() => handleRequestClick(request)}
                >
                  {request.patientFullName} - {request.description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {selectedRequest && (
              <div className="border border-gray-300 rounded p-4">
                <h2 className="text-xl font-bold mb-2">Request Details</h2>
                <p><strong>Patient Name:</strong> {selectedRequest.patientFullName}</p>
                <p><strong>Description:</strong> {selectedRequest.description}</p>
                <p><strong>Date Requested:</strong> {selectedRequest.requestDate}</p>
                <p><strong>Status:</strong> {selectedRequest.status}</p>
                <p><strong>Doctor Id:</strong> {selectedRequest.doctorId}</p>
                <button className="mt-4 p-2 bg-green-500 text-white rounded" onClick={() => handleAccept(selectedRequest.id)}>
                  Accept
                </button>
                <button className="mt-4 ml-2 p-2 bg-red-500 text-white rounded" onClick={() => handleDecline(selectedRequest.id)}>
                  Decline
                </button>
              </div>
            )}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalCards={filteredRequests.length}
          onPageChange={handlePageChange}
          cardsPerPage={requestsPerPage}
        />
        <AppointmentModal 
          isOpen={isModalOpen} 
          onRequestClose={() => setIsModalOpen(false)} 
          requestDate={modalRequestDate}
          onAssign={handleAssign}
        />
      </div>
    </>
  );
};

export default AppointmentRequests;
