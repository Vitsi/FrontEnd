import React from 'react';
import { FcRating } from 'react-icons/fc';
import { FiPhoneOutgoing } from 'react-icons/fi';

interface HospitalCardData {
    name: string;
    city: string;
    area: string;
    rating: number;
    imageUrl: string;
    speciality: string; 
    showButtons?: boolean; 
}

const HospitalCard: React.FC<HospitalCardData> = ({ name, city, area, rating, imageUrl, speciality, showButtons = false }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
            {showButtons && (
                <div className="flex justify-end mb-4">
                    <FiPhoneOutgoing  className="text-violate-100 text-xl" />
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
                <div className="mt-4">
                <button className="btn btn-outline btn-primary">Cancle Appointments</button>                </div>
            )}
        </div>
    );
}

export default HospitalCard;
