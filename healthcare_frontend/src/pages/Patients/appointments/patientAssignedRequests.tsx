import React, { useState, useEffect } from 'react';
import HospitalCard from '../../../components/cards/hospitalCard';

const AssignedHospitalRequests: React.FC = () => {
  const [assignedRequests, setAssignedRequests] = useState<any[]>([]);

  useEffect(() => {
    const storedRequests = localStorage.getItem('assignedHospitalRequests');
    if (storedRequests) {
      setAssignedRequests(JSON.parse(storedRequests));
    }
  }, []);

  const cancelAppointment = (id: number) => {
    const updatedRequests = assignedRequests.filter((request) => request.id !== id);
    setAssignedRequests(updatedRequests);
    localStorage.setItem('assignedHospitalRequests', JSON.stringify(updatedRequests));
  };

  const renderHospitalCards = () => {
    return assignedRequests.map((request) => (
      <HospitalCard
        key={request.id}
        hospitalFullName={request.hospital.name}
        city={request.hospital.city}
        area={request.hospital.area}
        rating={request.hospital.rating}
        imageUrl={request.hospital.imageUrl}
        speciality={request.hospital.speciality}
        appointmentTime={request.requestDate}
        phoneNumber={'+251-911-2345'}
        showButtons={true}
        onCancelAppointment={() => cancelAppointment(request.id)}
      />
    ));
  };

  return (
    <>
      <section>
        <div className="p-5 sm:ml-64">
          <div className="grid gap-4 md:grid-cols-1">
            {renderHospitalCards()}
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignedHospitalRequests;
