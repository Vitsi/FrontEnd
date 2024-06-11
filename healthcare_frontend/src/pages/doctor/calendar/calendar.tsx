// import React, { useState } from 'react';
// import { Calendar, momentLocalizer, Views, SlotInfo, Event } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Navbar from '../../../components/common/navbar';
// import DoctorSidebar from '../../../components/sidebar/doctorSidebar';

// const localizer = momentLocalizer(moment);

// interface CustomEvent extends Event {
//   title: string;
//   start: Date;
//   end: Date;
//   allDay: boolean;
//   resource: string;
// }

// const Modal: React.FC<{ show: boolean, onClose: () => void, onConfirm: (action: string) => void, event?: CustomEvent }> = ({ show, onClose, onConfirm }) => {

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="p-5 sm:ml-64 sm:mt-20 md:ml-18 md:p-3 bg-white p-6 rounded shadow-lg ">
//         <h2 className="text-lg font-bold mb-4">Edit Event</h2>
        
//         <div className="flex justify-end">
//           <button
//             onClick={() => onConfirm('switch')}
//             className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Switch Event
//           </button>
//           <button
//             onClick={() => onConfirm('delete')}
//             className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Delete Event
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-400 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DoctorCalendar: React.FC = () => {
//   const [events, setEvents] = useState<CustomEvent[]>([]);
//   const [selectedSlot, setSelectedSlot] = useState<{ start: Date, end: Date } | null>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [currentEvent, setCurrentEvent] = useState<CustomEvent | undefined>(undefined);

//   const handleSelectSlot = ({ start, end }: SlotInfo) => {
//     setSelectedSlot({ start, end });
//   };

//   const createEvent = (title: string) => {
//     if (selectedSlot) {
//       setEvents([...events, {
//         start: selectedSlot.start,
//         end: selectedSlot.end,
//         title,
//         allDay: false,
//         resource: ''
//       }]);
//       setSelectedSlot(null);
//     }
//   };

//   const handleEventClick = (event: CustomEvent) => {
//     setCurrentEvent(event);
//     setShowModal(true);
//   };

//   const handleModalConfirm = (action: string) => {
//     if (action === 'switch' && currentEvent) {
//       const updatedTitle = currentEvent.title === 'Available' ? 'Unavailable' : 'Available';
//       setEvents(events.map(evt => (evt === currentEvent ? { ...evt, title: updatedTitle } : evt)));
//     } else if (action === 'delete' && currentEvent) {
//       setEvents(events.filter(evt => evt !== currentEvent));
//     }
//     setShowModal(false);
//     setCurrentEvent(undefined);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     setCurrentEvent(undefined);
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={true} />
//       <DoctorSidebar />
//       <div className="p-5 sm:ml-64 sm:mt-20 md:ml-18 md:p-3">
//         {selectedSlot && (
//           <div className="mb-4">
//             <button
//               onClick={() => createEvent('Available')}
//               className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Set Available
//             </button>
//             <button
//               onClick={() => createEvent('Unavailable')}
//               className="px-4 py-2 bg-red-500 text-white rounded"
//             >
//               Set Unavailable
//             </button>
//           </div>
//         )}
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           selectable
//           onSelectSlot={handleSelectSlot}
//           onSelectEvent={handleEventClick}
//           style={{ height: 500 }}
//           views={[Views.MONTH, Views.WEEK, Views.DAY, 
//             Views.AGENDA]}
//           defaultView={Views.MONTH}
//         />
//         <Modal
//           show={showModal}
//           onClose={handleModalClose}
//           onConfirm={handleModalConfirm}
//           event={currentEvent}
//         />
//       </div>
//     </>
//   );
// };

// export default DoctorCalendar;


import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from '../../../components/common/navbar';
import DoctorSidebar from '../../../components/sidebar/doctorSidebar';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addEvent, updateEvent, deleteEvent } from '../../../redux/calendarSlice';
import { v4 as uuidv4 } from 'uuid';

const localizer = momentLocalizer(moment);

interface CustomEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: string;
 // doctorId: string;
}

const Modal: React.FC<{ show: boolean, onClose: () => void, onConfirm: (action: string) => void, event?: CustomEvent }> = ({ show, onClose, onConfirm }) => {

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-5 sm:ml-64 sm:mt-20 md:ml-18 md:p-3 bg-white p-6 rounded shadow-lg ">
        <h2 className="text-lg font-bold mb-4">Edit Event</h2>
        
        <div className="flex justify-end">
          <button
            onClick={() => onConfirm('switch')}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Switch Event
          </button>
          <button
            onClick={() => onConfirm('delete')}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Delete Event
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorCalendar: React.FC = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.calendar.events);
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date, end: Date } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<CustomEvent | undefined>(undefined);

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    setSelectedSlot({ start, end });
  };

  const createEvent = (title: string) => {
    if (selectedSlot) {
      const newEvent: CustomEvent = {
        id: uuidv4(),
        start: selectedSlot.start,
        end: selectedSlot.end,
        title,
        allDay: false,
        resource: '',
       // doctorId: 'test',
      };
      dispatch(addEvent(newEvent));
      setSelectedSlot(null);
    }
  };

  const handleEventClick = (event: CustomEvent) => {
    setCurrentEvent(event);
    setShowModal(true);
  };

  const handleModalConfirm = (action: string) => {
    if (action === 'switch' && currentEvent) {
      const updatedEvent = {
        ...currentEvent,
        title: currentEvent.title === 'Available' ? 'Unavailable' : 'Available'
      };
      dispatch(updateEvent(updatedEvent));
    } else if (action === 'delete' && currentEvent) {
      dispatch(deleteEvent(currentEvent.id));
    }
    setShowModal(false);
    setCurrentEvent(undefined);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentEvent(undefined);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <DoctorSidebar />
      <div className="p-5 sm:ml-64 sm:mt-20 md:ml-18 md:p-3">
        {selectedSlot && (
          <div className="mb-4">
            <button
              onClick={() => createEvent('Available')}
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Set Available
            </button>
            <button
              onClick={() => createEvent('Unavailable')}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Set Unavailable
            </button>
          </div>
        )}
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleEventClick}
          style={{ height: 500 }}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
          defaultView={Views.MONTH}
        />
        <Modal
          show={showModal}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
          event={currentEvent}
        />
      </div>
    </>
  );
};

export default DoctorCalendar;
