/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../../components/common/navbar";
import Layout from "../notifications/layoutPatients";

const PersonalMedicalRecords: React.FC = () => {
  const [medicalRecords, setMedicalRecords] = useState<any[]>([]); 

  useEffect(() => {
    // Simulated fetch of medical records (replace with actual API call)
    const fetchMedicalRecords = async () => {
      // Replace with actual API endpoint to fetch medical records for the logged-in patient
      try {
        // Example: Fetching medical records from a hypothetical API
        const response = await fetch('https://api.example.com/medical-records');
        if (!response.ok) {
          throw new Error('Failed to fetch medical records');
        }
        const data = await response.json();
        setMedicalRecords(data); // Update state with fetched medical records
      } catch (error) {
        console.error('Error fetching medical records:', error);
        // Handle error scenario (e.g., show error message to user)
      }
    };

    fetchMedicalRecords(); // Call the function to fetch medical records
  }, []);

  return (
    <>
      <Layout>
        <Navbar isLoggedIn={true} />
        <div className="p-5 sm:ml-64">
          <div  className="
                md:ml-48 
                sm:pl-4 sm:pt-4 sm:mt-14 
                 lg:mt-14
                ">
          <h1 className="text-2xl text-blue-700 font-bold mb-4">Personal Medical Records</h1>
          {medicalRecords.length === 0 ? (
            <p className='text-xl font-semibold text-blue-600/75 dark:text-blue-500/75' 
            >No medical records found.</p>
          ) : (
            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <div key={record.recordId} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{record.hospitalName}</h2>
                    <p><strong>Date of Visit:</strong> {record.dateOfVisit}</p>
                    <p><strong>Record Number:</strong> {record.recordNumber}</p>
                    <p><strong>Doctor:</strong> {record.doctorName}</p>
                    <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                    <Link
                      to={`/medical-history/${record.recordNumber}`}
                      className="block text-blue-700 underline mt-2"
                    >
                      View Medical History
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
          )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PersonalMedicalRecords;
