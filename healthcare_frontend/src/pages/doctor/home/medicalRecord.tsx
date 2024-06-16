import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LabTest } from "../../labTech/home/labTechRequests";

interface MedicalRecord {
  recordId: number;
  patientId: number;
  hospitalId: number;
  doctorId: number;
  recordNumber: string;
  dateOfVisit: string;
  weight: number;
  height: number;
  bloodType: string;
  prescription: string;
  description: string;
}

interface MedicalRecordProps {
  patientId: number;
  patientName: string;
  patientAge: number;
}

const MedicalRecord: React.FC<MedicalRecordProps> = ({ patientId, patientName, patientAge }) => {
  const { recordNumber } = useParams<{ recordNumber: string }>(); // Fetching recordNumber from route params
  const [medicalRecord, setMedicalRecord] = useState<MedicalRecord | null>(null);
  const [labTests, setLabTests] = useState<LabTest[]>([]);
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    weightUnit: 'kg',
    heightUnit: 'cm',
    bloodType: '',
    prescription: '',
    description: ''
  });

  useEffect(() => {
    // Simulating fetching from local storage or backend
    const storedRecords = JSON.parse(localStorage.getItem('medicalRecords') || '[]');
    const record = storedRecords.find((r: MedicalRecord) => r.recordNumber === recordNumber);
    if (record) {
      setMedicalRecord(record);

      // Simulating fetching lab tests associated with the patient
      const storedLabTests = JSON.parse(localStorage.getItem('labTests') || '[]');
      const tests = storedLabTests.filter((test: LabTest) => test.patientId === record.patientId);
      setLabTests(tests);
    }
  }, [recordNumber]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Update medical record
    const updatedRecord: MedicalRecord = {
      recordId: medicalRecord ? medicalRecord.recordId : 0, // Assign a temporary value or handle appropriately
      patientId: patientId,
      hospitalId: 0, // Assign a temporary value or handle appropriately
      doctorId: 0, // Assign a temporary value or handle appropriately
      recordNumber: recordNumber,
      dateOfVisit: new Date().toISOString(), // Example: current timestamp
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      bloodType: formData.bloodType,
      prescription: formData.prescription,
      description: formData.description
    };

    // Save to local storage (replace with actual API call)
    const storedRecords = JSON.parse(localStorage.getItem('medicalRecords') || '[]');
    const updatedRecords = storedRecords.map((record: MedicalRecord) =>
      record.recordNumber === recordNumber ? updatedRecord : record
    );
    localStorage.setItem('medicalRecords', JSON.stringify(updatedRecords));
    setMedicalRecord(updatedRecord);

    console.log('Medical record updated:', updatedRecord);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Medical Record</h2>
      <div>
        <p className="text-lg font-bold mb-2">Patient Information:</p>
        <p>Name: {patientName}</p>
        <p>Age: {patientAge}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Date of Visit</label>
          <input
            type="text"
            value={medicalRecord ? new Date(medicalRecord.dateOfVisit).toLocaleString() : ''}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Weight (kg)</label>
          <div className="flex">
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded mr-2"
            />
            <span className="self-center">kg</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Height (cm)</label>
          <div className="flex">
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded mr-2"
            />
            <span className="self-center">cm</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Blood Type</label>
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Prescription</label>
          <textarea
            name="prescription"
            value={formData.prescription}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows={4}
          ></textarea>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows={4}
          ></textarea>
        </div>
      </div>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Update Record
      </button>

      <div className="mt-5">
        <h3 className="text-xl font-bold mb-2">Lab Test Results</h3>
        <ul>
          {labTests.map(test => (
            <li key={test.labTestId}>
              {test.value.labTestNotes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalRecord;
