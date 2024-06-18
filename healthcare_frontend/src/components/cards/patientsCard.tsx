import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PatientCardProps {
  image: string;
  name: string;
  age: number;
  gender: string;
  recordNumber: string;
  appointmentDate: string;
  emergencyContact: string;
  onClick: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ image, name, age, gender, recordNumber, appointmentDate }) => { 
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/medical-record/${recordNumber}`);
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex">
      <img src={image} alt={`${name}'s image`} className="w-24 h-24 object-cover rounded-full mr-4" />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Record Number: {recordNumber}</p>
        <p>Appointment Date: {appointmentDate}</p>
      </div>
    </div>
  );
};

export default PatientCard;
