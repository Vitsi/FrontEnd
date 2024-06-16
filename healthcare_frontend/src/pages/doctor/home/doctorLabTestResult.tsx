import React, { useState, useEffect } from 'react';
import { MdOutlineFolderShared } from 'react-icons/md';

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
    files?: File[]; // Add files field to store uploaded files
}
const DoctorLabTestResult: React.FC = () => {
    const [labTests, setLabTests] = useState<LabTest[]>([]);

    useEffect(() => {
        // Fetch lab tests from local storage or backend (simulated here)
        const storedLabTests = JSON.parse(localStorage.getItem('labTests') || '[]');
        setLabTests(storedLabTests);
    }, []);

    
    const handleDeleteAll = () => {
        localStorage.removeItem('labTests');
        setLabTests([]);
    };
    

    return (
        <div className="md:ml-64 sm:ml-64 sm:pl-4 sm:pt-4 lg-14">
            <button className="mb-4 p-2 bg-red-500 text-white rounded" onClick={handleDeleteAll}>
                Delete All Results
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {labTests.filter(test => test.labTestStatus === 'results').map(test => (
                    <div
                        key={test.labTestId}
                        className="p-4 border border-gray-300 rounded-lg shadow-md cursor-pointer"
                    >
                        <h2 className="text-xl font-bold">{test.patientName}</h2>
                        <p>Record Number: {test.patientRecordNumber}</p>
                        <p>Doctor: {test.doctorName} (ID: {test.doctorStaffId})</p>
                        <p>Request Date: {test.requestDate}</p>
                        <p>Lab Test Notes: {test.value.labTestNotes }</p>
                        <p><MdOutlineFolderShared 
                        className='w-7 h-7'
                        // onClick = "h"
                        />
                        </p>
                    </div>
                )).reverse()}
            </div>
        </div>
    );
};

export default DoctorLabTestResult;
