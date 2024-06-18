import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MedicalHistory: React.FC = () => {
  const { recordNumber } = useParams<{ recordNumber: string }>();
  const location = useLocation();
  const medicalRecord = location.state;

  return (
    <div className="p-5 sm:ml">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-2xl text-blue-700 font-bold bg-blue-100 py-4 px-6 border-b border-blue-300">
          Medical History
        </h1>
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">General Information</h2>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="text-gray-600"><strong>Record Number:</strong> {recordNumber}</p>
                <p className="text-gray-600"><strong>Date of Visit:</strong> {medicalRecord?.dateOfVisit}</p>
                <p className="text-gray-600"><strong>Weight:</strong> {medicalRecord?.weight} kg</p>
                <p className="text-gray-600"><strong>Height:</strong> {medicalRecord?.height} cm</p>
                <p className="text-gray-600"><strong>Blood Type:</strong> {medicalRecord?.bloodType}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Vital Signs</h2>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="text-gray-600"><strong>Blood Pressure:</strong> {medicalRecord?.vitalSigns?.bloodPressure}</p>
                <p className="text-gray-600"><strong>Heart Rate:</strong> {medicalRecord?.vitalSigns?.heartRate} bpm</p>
              </div>
              <div>
                <p className="text-gray-600"><strong>Respiratory Rate:</strong> {medicalRecord?.vitalSigns?.respiratoryRate} breaths/min</p>
                <p className="text-gray-600"><strong>Temperature:</strong> {medicalRecord?.vitalSigns?.temperature} °C</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Symptoms</h2>
            <p className="text-gray-600"><strong>Description:</strong> {medicalRecord?.symptoms?.description}</p>
            <p className="text-gray-600"><strong>Duration:</strong> {medicalRecord?.symptoms?.duration}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Social History</h2>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="text-gray-600"><strong>Do you smoke?</strong> {medicalRecord?.socialHistory?.doYouSmoke}</p>
                <p className="text-gray-600"><strong>Alcohol Consumption:</strong> {medicalRecord?.socialHistory?.alcoholConsumption}</p>
              </div>
              <div>
                <p className="text-gray-600"><strong>Current Medications:</strong> {medicalRecord?.socialHistory?.currentMedications}</p>
                <p className="text-gray-600"><strong>Exercise Frequency:</strong> {medicalRecord?.socialHistory?.exerciseFrequency}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Operations History</h2>
            <p className="text-gray-600">{medicalRecord?.operationsHistory}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;


