import React from 'react';
import { FcRating } from 'react-icons/fc';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { CiClock1 } from 'react-icons/ci';

interface HospitalCardData {
    name: string;
    city: string;
    area: string;
    rating: number;
    imageUrl: string;
    speciality: string; 
    showButtons?: boolean;
    isPending?: boolean;
    appointmentTime?: string;
    phoneNumber?: string;
}

const HospitalCard: React.FC<HospitalCardData> = ({ name, city, area, rating, imageUrl, speciality, showButtons = false, isPending = false, appointmentTime, phoneNumber }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
            {showButtons && (
                <div className="flex justify-end mb-4">
                    <div className="collapse bg-white-900">
                        <input type="checkbox" className="peer" /> 
                        <div className="collapse-title
                         rounded-lg 
                         border border-gray-200 
                         mb-1 mt-1
                        ">
                            <FiPhoneOutgoing className="text-green-500 text-xl" />
                        </div>
                        <div className="collapse-content 
                         border border-gray-200  "> 
                            <p className="text-green-600">{phoneNumber}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Hospital information */}
            <div className="flex items-center justify-between mb-4">
                {/* Hospital image */}
                <img src={imageUrl} alt="Hospital" className="w-20 h-20 rounded-full" />
                <div className="flex flex-col flex-grow ml-4">
                    {/* Hospital name */}
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                        <span>{rating}</span>
                        {/* Star icon */}
                        <FcRating />
                    </div>
                </div>
            </div>
            <div className="space-y-2 font-medium">
                {/* Speciality */}
                <p className="text-gray-600 dark:text-gray-300 mt-2">{speciality}</p>
                {/* Divider */}
                <hr className="border-gray-200 dark:border-gray-700" />
                {/* Hospital address */}
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
                        <button className="btn btn-outline btn-error-500 border-red-400 text-red-500 hover:bg-red-400 hover:text-black hover:border-red-400 transition duration-300">Cancel Appointment</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default HospitalCard;
