import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientCard from '../../../components/cards/patientsCard';
import LoadingSpinner from '../../../components/common/loadingSpinner';
import Pagination from '../../../components/common/pagination';

const PatientsTab: React.FC = () => {
  const navigate = useNavigate();
  const mockPatients = [
    { image: 'https://via.placeholder.com/150', name: 'John Doe', age: 30, gender: 'F', patientId: 1, recordNumber: '12345', emergencyContact: '09765', appointmentDate: '2024-06-01' },
    { image: 'https://via.placeholder.com/150', name: 'Jane Smith', age: 35, gender: 'M', patientId: 2, recordNumber: '67890', emergencyContact: '09765', appointmentDate: '2023-12-01' },
    { image: 'https://via.placeholder.com/150', name: 'New Name', age: 42, gender: 'F', patientId: 3, recordNumber: '1345', emergencyContact: '09765', appointmentDate: '2024-12-01' },
    { image: 'https://via.placeholder.com/150', name: 'Name 3', age: 15, gender: 'M', patientId: 4, recordNumber: '6790', emergencyContact: '09765', appointmentDate: '2023-09-01' },
    { image: 'https://via.placeholder.com/150', name: 'Jaj Nth', age: 23, gender: 'F', patientId: 5, recordNumber: '67', emergencyContact: '09765', appointmentDate: '2023-09-01' },
  ];

  const [patients] = useState(mockPatients);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(2); // Adjusted cardsPerPage for demonstration purposes
  const totalCards = patients.length;

  useEffect(() => {
    // Simulate delay for loading spinner
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating 1.5 seconds delay
    return () => clearTimeout(delay);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (recordNumber: string) => {
    navigate(`/medical-record/${recordNumber}`);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = patients.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="p-5 sm:ml-64">
      {loading ? ( 
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
            {currentCards.map((patient) => (
              <PatientCard
                key={patient.recordNumber}
                image={patient.image}
                name={patient.name}
                age={patient.age}
                gender={patient.gender}
                recordNumber={patient.recordNumber}
                emergencyContact={patient.emergencyContact}
                appointmentDate={patient.appointmentDate}
                onClick={() => handleCardClick(patient.recordNumber)}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalCards={totalCards}
            onPageChange={handlePageChange}
            cardsPerPage={cardsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default PatientsTab;
