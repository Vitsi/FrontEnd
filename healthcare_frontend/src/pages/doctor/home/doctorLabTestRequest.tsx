import React, { useState, useEffect } from 'react';

const commonLabTests = [
    'Stool Analysis', 'RDT', 
    'Pregnancy Test', 'Complete Blood Count',
    'Organ function test', 'Urinalysis',
    'Blood Glucose Test', 'HbA1c Test',
    'Lipid Profile', 'Serum Electrolyte',
    'Coagulation Profile', 'Cancer Biomarkers',
    'Viral Microarray', 'Radiograph'
];

interface LabTech {
    id: number;
    name: string;
}

const DoctorLabTestRequest: React.FC = () => {
    const [patientName, setPatientName] = useState('');
    const [patientRecordNumber, setPatientRecordNumber] = useState('');
    const [selectedLabTests, setSelectedLabTests] = useState<string[]>([]);
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [labTechs, setLabTechs] = useState<LabTech[]>([]);
    const [selectedLabTech, setSelectedLabTech] = useState<number | null>(null);
    const [doctorName] = useState('Dr. Smith'); // Example default value
    const [doctorStaffId] = useState('D001'); // Example default value

    useEffect(() => {
        // Simulate fetching lab technicians from a backend
        const fetchedLabTechs: LabTech[] = [
            { id: 1, name: 'Lab Tech 1' },
            { id: 2, name: 'Lab Tech 2' },
        ];
        setLabTechs(fetchedLabTechs);
    }, []);

    const handleLabTestSelection = (labTest: string) => {
        setSelectedLabTests((prevSelectedTests) =>
            prevSelectedTests.includes(labTest)
                ? prevSelectedTests.filter(test => test !== labTest)
                : [...prevSelectedTests, labTest]
        );
    };

    const handleSendRequest = () => {
        // Prepare the lab test request data
        const newLabTest = {
            labTestId: Date.now(),
            patientId: 1, // Placeholder for patient ID (to be fetched from backend)
            labTechId: selectedLabTech, // Selected lab tech ID
            doctorId: 3, // Placeholder for doctor ID (to be fetched from backend)
            value: {
                selectedLabTests,
                additionalNotes
            },
            labTestStatus: 'request',
            patientName,
            patientRecordNumber,
            doctorName,
            doctorStaffId,
            requestDate: new Date().toISOString()
        };

        // Save lab test request data to local storage
        const existingLabTests = JSON.parse(localStorage.getItem('labTests') || '[]');
        const updatedLabTests = [...existingLabTests, newLabTest];
        localStorage.setItem('labTests', JSON.stringify(updatedLabTests));

        // Reset form fields after request is sent
        setPatientName('');
        setPatientRecordNumber('');
        setSelectedLabTests([]);
        setAdditionalNotes('');
        setSelectedLabTech(null);

        console.log('Lab test request sent:', newLabTest);
    };

    return (
        <div className="md:ml-64 sm:ml-64 sm:pl-4 sm:pt-4 lg-14">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Request Lab Test</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSendRequest(); }}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Patient Name
                        </label>
                        <input
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Patient Record Number
                        </label>
                        <input
                            type="text"
                            value={patientRecordNumber}
                            onChange={(e) => setPatientRecordNumber(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Select Lab Tests
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {commonLabTests.map((test, index) => (
                                <label key={index} className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedLabTests.includes(test)}
                                        onChange={() => handleLabTestSelection(test)}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span>{test}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Additional Notes
                        </label>
                        <textarea
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            rows={4}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Select Lab Technician
                        </label>
                        <select
                            value={selectedLabTech || ''}
                            onChange={(e) => setSelectedLabTech(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required
                        >
                            <option value="">Select a lab technician</option>
                            {labTechs.map((tech) => (
                                <option key={tech.id} value={tech.id}>
                                    {tech.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorLabTestRequest;
