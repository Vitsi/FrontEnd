import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';

interface Doctor {
  id: number;
  name: string;
}

interface Unavailability {
  id: number;
  doctorId: number;
  start: string;
  end: string;
  title: string;
}

interface ClerkCalendarProps {
  requestDate?: string;
  onDoctorSelect: (doctorId: number) => void;
  onTimeSlotSelect: (timeSlot: string) => void;
}

const ClerkCalendar: React.FC<ClerkCalendarProps> = ({ requestDate, onDoctorSelect, onTimeSlotSelect }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [unavailability, setUnavailability] = useState<Unavailability[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  useEffect(() => {
    const fetchedDoctors: Doctor[] = [
      { id: 1, name: 'Dr. John Smith' },
      { id: 2, name: 'Dr. Jane Doe' },
    ];
    setDoctors(fetchedDoctors);

    const fetchedUnavailability: Unavailability[] = [
      { id: 1, doctorId: 1, start: '2024-06-07', end: '2024-06-07', title: 'Unavailable' },
      { id: 2, doctorId: 2, start: '2024-06-08', end: '2024-06-10', title: 'Conference' },
    ];
    setUnavailability(fetchedUnavailability);
  }, []);

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const doctorId = Number(e.target.value);
    setSelectedDoctor(doctorId);
    onDoctorSelect(doctorId);
  };

  const handleDateClick = (arg: DateClickArg) => {
    onTimeSlotSelect(arg.dateStr);
  };

  const filteredEvents: EventInput[] = (selectedDoctor
    ? unavailability.filter((entry) => entry.doctorId === selectedDoctor)
    : unavailability
  ).map((entry) => ({
    id: entry.id.toString(),
    title: entry.title,
    start: entry.start,
    end: entry.end,
  }));

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="p-5 sm:ml-64 md:p-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Doctor Calendar</h1>
          <select onChange={handleDoctorChange} className="mb-4 p-2 border border-gray-300 rounded">
            <option value="">All Doctors</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridWeek"
          initialDate={requestDate}
          headerToolbar={{
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={filteredEvents}
          dateClick={handleDateClick}
        />
      </div>
    </>
  );
};

export default ClerkCalendar;
