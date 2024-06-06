import Pagination from '../../../components/common/pagination';
import LoadingSpinner from '../../../components/common/loadingSpinner';
import { useState } from 'react';
import PatientCard from '../../../components/cards/patientsCars';

const PatientsTab: React.FC = () => {
  // Mock data for patients
  const mockPatients = [
    { image: 'https://via.placeholder.com/150', name: 'John Doe', age: 30, recordNumber: '12345', appointmentDate: '2024-06-01' },
    { image: 'https://via.placeholder.com/150', name: 'Jane Smith', age: 35, recordNumber: '67890', appointmentDate: '2023-12-01' },
    { image: 'https://via.placeholder.com/150', name: 'new name', age: 42, recordNumber: '1345', appointmentDate: '2024-12-01' },
    { image: 'https://via.placeholder.com/150', name: 'name 3', age: 15, recordNumber: '6790', appointmentDate: '2023-09-01' },
    { image: 'https://via.placeholder.com/150', name: 'jiol ja', age: 32, recordNumber: '1234', appointmentDate: '2024-06-01' },
    { image: 'https://via.placeholder.com/150', name: '2 ahkd', age: 22, recordNumber: '690', appointmentDate: '2023-09-01' },
    { image: 'https://via.placeholder.com/150', name: 'anka jjd j', age: 32, recordNumber: '12w45', appointmentDate: '2024-06-01' },
    { image: 'https://via.placeholder.com/150', name: 'akjdhf akj', age: 25, recordNumber: '67wq90', appointmentDate: '2023-09-01' },
    { image: 'https://via.placeholder.com/150', name: 'ss skk', age: 40, recordNumber: '12q5', appointmentDate: '2024-06-01' },
    { image: 'https://via.placeholder.com/150', name: 'Jknlk nj', age: 15, recordNumber: '67qq90', appointmentDate: '2023-09-01' },
    { image: 'https://via.placeholder.com/150', name: 'sk sje', age: 20, recordNumber: '1qq45', appointmentDate: '2024-06-01' },
    { image: 'https://via.placeholder.com/150', name: 'Jaj nth', age: 23, recordNumber: '67r0', appointmentDate: '2023-09-01' },
  ];

  const [patients] = useState(mockPatients);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10); // Number of cards to display per page

  const totalCards = patients.length;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the cards to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = patients.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="p-5 sm:ml-64">
      <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
        {currentCards.map((patient) => (
          <PatientCard
            key={patient.recordNumber}
            image={patient.image}
            name={patient.name}
            age={patient.age}
            recordNumber={patient.recordNumber}
            appointmentDate={patient.appointmentDate}
          />
        ))}
      </div>
          
            <Pagination
              currentPage={currentPage}
              totalCards={totalCards}
              onPageChange={handlePageChange}
              cardsPerPage={cardsPerPage}
            />
          
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default PatientsTab;
