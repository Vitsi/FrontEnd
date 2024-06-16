import React, { useState, useEffect, ChangeEvent } from 'react';

export interface LabTest {
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
}
const LabTechRequests: React.FC = () => {
    const [labTests, setLabTests] = useState<LabTest[]>([]);
    const [selectedLabTest, setSelectedLabTest] = useState<LabTest | null>(null);
    const [resultValue, setResultValue] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    useEffect(() => {
        // Fetch lab tests from local storage (simulate backend fetching)
        const storedLabTests = JSON.parse(localStorage.getItem('labTests') || '[]');
        setLabTests(storedLabTests);
    }, []);

    const handleCardClick = (labTest: LabTest) => {
        // Handle card click to view details or process the lab test
        setSelectedLabTest(labTest);
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const validFiles = Array.from(files).filter(file => {
                const fileType = file.type.split('/')[0]; // Extract file type (image, application, etc.)
                return ['image', 'application', 'video'].includes(fileType); // Filter by allowed types
            });
            setUploadedFiles([...uploadedFiles, ...validFiles]);
        }
    };

    const handleSendResult = () => {
        if (selectedLabTest) {
            // Prepare data to send to doctor
            const updatedLabTest: LabTest = {
                ...selectedLabTest,
                value: {
                    ...selectedLabTest.value,
                    labTestNotes: resultValue // Set labTestNotes here
                },
                labTestStatus: 'results' // Update labTestStatus to 'results'
            };

            // Simulate storing in the backend (replace with actual API call)
            const updatedLabTests = labTests.map(test =>
                test.labTestId === selectedLabTest.labTestId ? updatedLabTest : test
            );
            localStorage.setItem('labTests', JSON.stringify(updatedLabTests));
            setLabTests(updatedLabTests);

            // Reset form fields after result is sent
            setSelectedLabTest(null);
            setResultValue('');
            setUploadedFiles([]);

            console.log('Lab test result sent:', updatedLabTest);
        }
    };

    return (
        <div className="md:ml-64 sm:ml-64 sm:pl-4 sm:pt-4 lg-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {labTests.filter(test => test.labTestStatus === 'request').map(test => (
                    <div
                        key={test.labTestId}
                        className="p-4 border border-gray-300 rounded-lg shadow-md cursor-pointer"
                        onClick={() => handleCardClick(test)}
                    >
                        <h2 className="text-xl font-bold">{test.patientName}</h2>
                        <p>Record Number: {test.patientRecordNumber}</p>
                        <p>Doctor: {test.doctorName} (ID: {test.doctorStaffId})</p>
                        <p>Request Date: {test.requestDate}</p>
                        <p>{test.value.additionalNotes}</p>
                    </div>
                ))}
            </div>
            {selectedLabTest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Lab Test Result Form</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Patient Name
                                </label>
                                <input
                                    type="text"
                                    value={selectedLabTest.patientName}
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Patient Record Number
                                </label>
                                <input
                                    type="text"
                                    value={selectedLabTest.patientRecordNumber}
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Doctor Name
                                </label>
                                <input
                                    type="text"
                                    value={selectedLabTest.doctorName}
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Lab Test Result
                                </label>
                                <textarea
                                    value={resultValue}
                                    onChange={(e) => setResultValue(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                    rows={4}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Attach Files (PDF, Images, Videos)
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    accept=".pdf"
                                    onChange={handleFileUpload}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleSendResult}
                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    Send Result
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedLabTest(null)}
                                    className="ml-2 bg-gray-600 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LabTechRequests;
