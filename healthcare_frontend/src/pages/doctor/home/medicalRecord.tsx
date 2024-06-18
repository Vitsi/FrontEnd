import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MedicalRecord {
  recordId: number;
  patientId: number;
  hospitalId: number;
  doctorId: number;
  recordNumber: string;
  dateOfVisit: string;
  weight: string;
  height: string;
  bloodType: string;
  prescription: string;
  diagnosis: string;
  symptoms: {
    description: string;
    duration: string;
  };
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    respiratoryRate: number;
    temperature: number;
  };
  socialHistory: {
    doYouSmoke: string;
    alcoholConsumption: string; 
    currentMedications: string;
    exerciseFrequency: string;
  };
  operationsHistory: string;
}

const MedicalRecordsForm: React.FC = () => {
  const navigate = useNavigate();

  const [record, setRecord] = useState<MedicalRecord>(() => ({
    recordId: 0,
    patientId: 0,
    hospitalId: 0,
    doctorId: 0,
    recordNumber: '',
    dateOfVisit: new Date().toISOString().substr(0, 10), // Initialize with today's date
    weight: '',
    height: '',
    bloodType: '',
    prescription: '',
    diagnosis: '',
    symptoms: {
      description: '',
      duration: '',
    },
    vitalSigns: {
      bloodPressure: '',
      heartRate: 0,
      respiratoryRate: 0,
      temperature: 0,
    },
    socialHistory: {
      doYouSmoke: '',
      alcoholConsumption: '',
      currentMedications: '',
      exerciseFrequency: '',
    },
    operationsHistory: '',
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Handle nested properties with a prefix pattern
    if (name.startsWith("symptoms-")) {
      const symptomType = name.split("-")[1] as keyof MedicalRecord['symptoms'];
      setRecord((prev) => ({
        ...prev,
        symptoms: {
          ...prev.symptoms,
          [symptomType]: value,
        },
      }));
    } else if (name.startsWith("vitalSigns-")) {
      const vitalSignType = name.split("-")[1] as keyof MedicalRecord['vitalSigns'];
      setRecord((prev) => ({
        ...prev,
        vitalSigns: {
          ...prev.vitalSigns,
          [vitalSignType]: value,
        },
      }));
    } else if (name.startsWith("socialHistory-")) {
      const socialHistoryType = name.split("-")[1] as keyof MedicalRecord['socialHistory'];
      setRecord((prev) => ({
        ...prev,
        socialHistory: {
          ...prev.socialHistory,
          [socialHistoryType]: value,
        },
      }));
    } else {
      setRecord((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleChoose = (
    name: keyof MedicalRecord['socialHistory'],
    value: string
  ) => {
    setRecord((prev) => ({
      ...prev,
      socialHistory: {
        ...prev.socialHistory,
        [name]: value,
      },
    }));
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('medicalRecord', JSON.stringify(record));
    console.log('Updated Record:', record);
    navigate(`/medical-history/${record.recordNumber}`, { state: record });
  };

  const handleFullUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to update the record
    console.log('Updated Full Record:', record);
  };

  return (
    <div className="p-5 sm:ml">
<div className="flex justify-between items-center">
        <h1 
        className="text-xl font-semibold text-blue-600/75 dark:text-blue-500/75">
          Medical Record</h1>
        <button
          onClick={() => navigate(`/medical-history/${record.recordNumber || 'new'}`, 
            { state: record })}
          className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
          Medical History
        </button>
      </div>      <form className="mt-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Date of Visit</label>
            <input
              type="date"
              name="dateOfVisit"
              value={record.dateOfVisit}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className=" block mb-2">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={record.weight}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={record.height}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Blood Type</label>
            <select
              name="bloodType"
              value={record.bloodType}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="">Select Blood Type</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="O">O</option>
              <option value="AB">AB</option>
            </select>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Blood Pressure</label>
            <input
              type="text"
              name="vitalSigns-bloodPressure"
              value={record.vitalSigns.bloodPressure}
              onChange={handleChange}
              placeholder='Enter blood pressure'
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Heart Rate</label>
            <input
              type="number"
              name="vitalSigns-heartRate"
              value={record.vitalSigns.heartRate}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Respiratory Rate</label>
            <input
              type="number"
              name="vitalSigns-respiratoryRate"
              value={record.vitalSigns.respiratoryRate}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Temperature</label>
            <input
              type="number"
              name="vitalSigns-temperature"
              value={record.vitalSigns.temperature}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
       
        <div className="grid grid-rows-1 sm:grid-rows-1 gap-4"> 
          
          <div>
            <label className="block mb-2">Exercise Frequency</label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="exerciseFrequency"
                  value="Never"
                  checked={record.socialHistory.exerciseFrequency === "Never"}
                  onChange={(e) => handleChoose("exerciseFrequency", e.target.value)}
                />
                <span className="ml-2">Never</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="exerciseFrequency"
                  value="1-2 times a week"
                  checked={record.socialHistory.exerciseFrequency === "1-2 times a week"}
                  onChange={(e) => handleChoose("exerciseFrequency", e.target.value)}
                />
                <span className="ml-2">1-2 times a week</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="exerciseFrequency"
                  value="3-4 times a week"
                  checked={record.socialHistory.exerciseFrequency === "3-4 times a week"}
                  onChange={(e) => handleChoose("exerciseFrequency", e.target.value)}
                />
                <span className="ml-2">3-4 times a week</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="exerciseFrequency"
                  value="More"
                  checked={record.socialHistory.exerciseFrequency === "More"}
                  onChange={(e) => handleChoose("exerciseFrequency", e.target.value)}
                />
                <span className="ml-2">More</span>
              </label>
            </div>
          </div>
        
          <div>
            <label className="block mb-2">Do You Smoke?</label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="doYouSmoke"
                  value="No"
                  checked={record.socialHistory.doYouSmoke === "No"}
                  onChange={(e) => handleChoose("doYouSmoke", e.target.value)}
                />
                <span className="ml-2">No</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="doYouSmoke"
                  value="0-1 pack a day"
                  checked={record.socialHistory.doYouSmoke === "0-1 pack a day"}
                  onChange={(e) => handleChoose("doYouSmoke", e.target.value)}
                />
                <span className="ml-2">0-1 pack a day</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="doYouSmoke"
                  value="1-2 packs a day"
                  checked={record.socialHistory.doYouSmoke === "1-2 packs a day"}
                  onChange={(e) => handleChoose("doYouSmoke", e.target.value)}
                />
                <span className="ml-2">1-2 packs a day</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="doYouSmoke"
                  value="More"
                  checked={record.socialHistory.doYouSmoke === "More"}
                  onChange={(e) => handleChoose("doYouSmoke", e.target.value)}
                />
                <span className="ml-2">More</span>
              </label>
            </div>
          </div>
        
          <div>
            <label className="block mb-2">Alcohol Consumption</label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="alcoholConsumption"
                  value="I don't drink"
                  checked={record.socialHistory.alcoholConsumption === "I don't drink"}
                  onChange={(e) => handleChoose("alcoholConsumption", e.target.value)}
                />
                <span className="ml-2">I don't drink</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="alcoholConsumption"
                  value="1-2 glasses a day"
                  checked={record.socialHistory.alcoholConsumption === "1-2 glasses a day"}
                  onChange={(e) => handleChoose("alcoholConsumption", e.target.value)}
                />
                <span className="ml-2">1-2 glasses a day</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="alcoholConsumption"
                  value="3-4 glasses a day"
                  checked={record.socialHistory.alcoholConsumption === "3-4 glasses a day"}
                  onChange={(e) => handleChoose("alcoholConsumption", e.target.value)}
                />
                <span className="ml-2">3-4 glasses a day</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="alcoholConsumption"
                  value="More"
                  checked={record.socialHistory.alcoholConsumption === "More"}
                  onChange={(e) => handleChoose("alcoholConsumption", e.target.value)}
                />
                <span className="ml-2">More</span>
              </label>
            </div>
          </div>
        </div>
        

        <div>
  <label className="block mb-2">Current Medications</label>
  <input
    type="text"
    name="socialHistory-currentMedications"
    value={record.socialHistory.currentMedications}
    onChange={handleChange}
    className="input input-bordered w-full"
  />
</div>



              <div>
              <label className="block mb-2">Operations History If Any</label>
              <textarea
                name="operationsHistory"
                value={record.operationsHistory}
                onChange={handleChange}
                placeholder="Please list any of the patient's Operations and Dates"
                className="textarea textarea-bordered w-full"
              />
              </div>
              
        
        <div>
          <label className="block mb-2">Symptoms Description</label>
          <textarea
            name="symptoms-description"
            value={record.symptoms.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder='Headache, Fatigue, ...'

         />
        </div>
        <div>
          <label className="block mb-2">Symptoms Duration</label>
          <input
            type="text"
            name="symptoms-duration"
            value={record.symptoms.duration}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder='3 days, 1 week, ...'

         />
        </div>
        <div>
          <label className="block mb-2">Diagnosis</label>
          <textarea
            name="diagnosis"
            value={record.diagnosis}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Prescription</label>
          <textarea
            name="prescription"
            value={record.prescription}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
              <div className="flex justify-center">
              <button  type="submit" onClick={handleUpdate} 
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4 mt-10">
                Update Data
              </button>
              <button onClick={handleFullUpdate}
               className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-10">
                Update Full Data
              </button>
          </div>
        </form>
      </div>
    );
  };
export default MedicalRecordsForm;


