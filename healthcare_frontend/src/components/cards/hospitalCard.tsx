import React, { useState } from 'react';
import { FcRating } from 'react-icons/fc';
import { CiClock1 } from 'react-icons/ci';

interface HospitalCardData {
    hospitalFullName: string;
    city: string;
    area: string;
    rating: number;
    imageUrl: string;
    speciality: string;
    showButtons?: boolean;
    isPending?: boolean;
    appointmentTime?: string;
    phoneNumber?: string;
    onClick?: () => void;
    onCancelAppointment?: () => void;
}

const ConfirmationModal: React.FC<{ onConfirm: () => void; onClose: () => void }> = ({ onConfirm, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl text-black-600 font-bold mb-6">Are you sure you want to cancel the appointment?</h2>
                <div className="confirmation-buttons mt-3">
                    <button className="btn btn-outline hover:bg-blue-600 ml-3 mr-5" onClick={onConfirm}>Yes, Cancel</button>
                    <button className="btn btn-outline hover:bg-red-400" onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
};

const HospitalCard: React.FC<HospitalCardData> = ({ hospitalFullName, city, area, rating, imageUrl, speciality, showButtons = false, isPending = false, appointmentTime, phoneNumber, onClick, onCancelAppointment }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCancelAppointment = () => {
        setShowConfirmation(true);
    };

    const confirmCancelAppointment = () => {
        if (onCancelAppointment) {
            onCancelAppointment();
        }
        setShowConfirmation(false);
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <div onClick={onClick} className="cursor-pointer">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                {showButtons && (
                    <div className="flex justify-end">
                        <p className="text-green-600">{phoneNumber}</p>
                    </div>
                )}
                <div className="flex items-center justify-between mb-4">
                    <img src={imageUrl} alt="Hospital" className="w-20 h-20 rounded-full" />
                    <div className="flex flex-col flex-grow ml-4">
                        <h3 className="text-lg font-semibold mb-2">{hospitalFullName}</h3>
                        <div className="flex items-center space-x-1">
                            <span>{rating}</span>
                            <FcRating />
                        </div>
                    </div>
                </div>
                <div className="space-y-2 font-medium">
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{speciality}</p>
                    <hr className="border-gray-200 dark:border-gray-700" />
                    <div className="flex justify-start">
                        <p className="text-gray-600 dark:text-gray-300">{city},</p>
                        <p className="text-gray-600 dark:text-gray-300 ml-1">{area}</p>
                    </div>
                </div>
                {showButtons && (
                    <>
                        {isPending ? (
                            <div className="flex items-center mt-4">
                                <CiClock1 className="text-yellow-500 mr-2 h-7 w-7 mr-1" />
                                <div>Pending</div>
                            </div>
                        ) : (
                            <div className="flex justify-start mt-4">
                                <CiClock1 className="text-green-500 mr-2 h-7 w-7 mr-1" />
                                <div className="text-black-500">{appointmentTime}</div>
                            </div>
                        )}
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCancelAppointment}
                                className="btn btn-outline btn-error-500 border-red-400 text-red-500 hover:bg-red-400 hover:text-black hover:border-red-400 transition duration-300">
                                Cancel Appointment
                            </button>
                        </div>
                        {showConfirmation && (
                            <ConfirmationModal
                                onConfirm={confirmCancelAppointment}
                                onClose={closeConfirmation}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default HospitalCard;
