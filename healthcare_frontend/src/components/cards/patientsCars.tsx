import { useNavigate } from 'react-router-dom';

interface PatientCardData{
    image: string;
    name: string;
    age: number;
    recordNumber: string;
    appointmentDate: string;
  }
  
  const PatientCard: React.FC<PatientCardData> = ({ image, name, age, recordNumber, appointmentDate }) => {
    const navigate = useNavigate();
  
    const handleCardClick = () => {
      // Stub for navigation to patient's page
      navigate(`/patients/${recordNumber}`);
    };
  
    return (
      <div onClick={handleCardClick} className="cursor-pointer border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex">
      <img src={image} alt={`${name}'s image`} className="w-24 h-24 object-cover rounded-full mr-4"/>
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p>Age: {age}</p>
        <p>Record Number: {recordNumber}</p>
        <p>Appointment Date: {appointmentDate}</p>
      </div>
    </div>
    );
  };
  
  export default PatientCard;