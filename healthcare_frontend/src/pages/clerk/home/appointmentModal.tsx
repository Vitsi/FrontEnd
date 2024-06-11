// import React from 'react';
// import Modal from 'react-modal';
// import ClerkCalendar from './requestCalendar';

// interface AppointmentModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   requestDate: string;
//   onAssign: (doctorId: number, timeSlot: string) => void; 
// }

// const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onRequestClose, requestDate, onAssign }) => {
//   const handleAssign = () => {
//     // Example values, you should replace these with actual selected doctorId and timeSlot
//     const selectedDoctorId = 1; // Replace with actual selected doctor ID
//     const selectedTimeSlot = '2024-06-07T10:00:00'; // Replace with actual selected time slot
//     onAssign(selectedDoctorId, selectedTimeSlot);
//   };

//   return (
//     <section className=''>
//       <Modal 
//       isOpen={isOpen} 
//       onRequestClose={onRequestClose} 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-7  0">
//         <div className="p-5 mt-20 sm:ml- md:p-3">
//           {/* <h2 className="text-xl font-bold mb-4">Select Doctor and Time Slot</h2> */}
//           <ClerkCalendar requestDate={requestDate} />
//           <div className="pl-5 sm:ml-64">
//             <button 
//               onClick={onRequestClose} 
//               className="mt-4 p-2 bg-red-500 text-white rounded">
//               Close
//             </button>
//             <button 
//               onClick={handleAssign} 
//               className="mt-4 ml-2 p-2 bg-green-500 text-white rounded">
//               Assign
//             </button>
//           </div>
//           </div>
//       </Modal>
//     </section>
//   );
// };

// export default AppointmentModal;

import React, { useState } from 'react';
import Modal from 'react-modal';
import ClerkCalendar from './requestCalendar';

interface AppointmentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  requestDate: string;
  onAssign: (doctorId: number, timeSlot: string) => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onRequestClose, requestDate, onAssign }) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleAssign = () => {
    if (selectedDoctorId && selectedTimeSlot) {
      onAssign(selectedDoctorId, selectedTimeSlot);
    }
  };

  return (
    <section className=''>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70">
        <div className="p-5 mt-20 sm:ml- md:p-3">
          <ClerkCalendar 
            requestDate={requestDate}
            onDoctorSelect={(id) => setSelectedDoctorId(id)}
            onTimeSlotSelect={(slot) => setSelectedTimeSlot(slot)}
          />
          <div className="pl-5 sm:ml-64">
            <button 
              onClick={onRequestClose} 
              className="mt-4 p-2 bg-red-500 text-white rounded">
              Close
            </button>
            <button 
              onClick={handleAssign} 
              className="mt-4 ml-2 p-2 bg-green-500 text-white rounded">
              Assign
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default AppointmentModal;
