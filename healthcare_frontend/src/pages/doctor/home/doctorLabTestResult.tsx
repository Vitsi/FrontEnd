import React, { useState, useEffect } from 'react';
import { CiFolderOn } from 'react-icons/ci';
import LoadingSpinner from '../../../components/common/loadingSpinner';
import Pagination from '../../../components/common/pagination';

interface LabTest {
  labTestId: number;
  patientId: number;
  labTechId: number;
  doctorId: number;
  value: {
    selectedLabTests: string[];
    additionalNotes: string;
    labTestNotes?: string;
  };
  labTestStatus: string;
  patientName: string;
  patientRecordNumber: string;
  doctorName: string;
  doctorStaffId: string;
  requestDate: string;
  labTechName?: string;
  files?: File[];
}

const DoctorLabTestResult: React.FC = () => {
  const [labTests, setLabTests] = useState<LabTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    // Simulating a delay for fetching data
    setTimeout(() => {
      const storedLabTests = JSON.parse(localStorage.getItem('labTests') || '[]');
      setLabTests(storedLabTests);
      setLoading(false);
    }, 1000); // Adjust delay time as per your needs
  }, []);

  const handleFileDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = labTests
    .filter((test) => test.labTestStatus === 'results')
    .slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="md:ml-64 sm:ml-64 sm:pl-4 sm:pt-4 lg-14">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCards.map((test) => (
              <div
                key={test.labTestId}
                className="p-4 border border-blue-300 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold">{test.patientName}</h2>
                <p>Record Number: {test.patientRecordNumber}</p>
                <p>
                  Doctor: {test.doctorName} (ID: {test.doctorStaffId})
                </p>
                <p>Request Date: {test.requestDate}</p>
                <p>Lab Test Notes: {test.value.labTestNotes}</p>
                <div className="mt-2">
                  {test.files && test.files.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold">Attached Files:</h3>
                      <ul>
                        {test.files.map((file, index) => (
                          <li
                            key={index}
                            className="flex items-center cursor-pointer"
                          >
                            <CiFolderOn className="w-7 h-7 text-blue-700 mr-2" />
                            <button
                              onClick={() => handleFileDownload(file)}
                              className="text-blue-700 underline"
                            >
                              {file.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCards={labTests.filter((test) => test.labTestStatus === 'results').length}
            onPageChange={handlePageChange}
            cardsPerPage={cardsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default DoctorLabTestResult;
