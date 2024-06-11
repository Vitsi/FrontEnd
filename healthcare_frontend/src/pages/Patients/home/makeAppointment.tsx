import React, { useState } from 'react';

const MakeAppointment: React.FC<{ onRequestSubmit: (description: string, date: string) => void, onCancel: () => void }> = ({ onRequestSubmit, onCancel }) => {
    const [description, setDescription] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const maxDescriptionLength = 200; 
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onRequestSubmit(description, appointmentDate);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl text-blue-600 font-bold mb-6">Make an Appointment</h2>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                    required
                    placeholder="Write a small description of the type of care you think you require..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={maxDescriptionLength}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                 <div className="text-sm text-red-500 mt-1">
                    {description.length}/{maxDescriptionLength} characters
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Pick Appointment Date</label>
                <input
                    required
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Make Request</button>
                <button type="button" onClick={onCancel} className="bg-red-400 text-white px-6 py-2 rounded-lg">Cancel</button>
            </div>
        </form>
    );
}

export default MakeAppointment;
