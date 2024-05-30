import { useState } from 'react';
import { TiUserDeleteOutline } from 'react-icons/ti';
import img from '../../assets/test2.jpg';

export interface StaffCardData {
    staffName: string;
    profession: string;
    //profession: 'doctor' | 'lab tech' | 'clerk';
    specialization: string;
    staffID: string;
    imageUrl: string | null;
    onDelete: (staffID: string) => void;
    //forstaff data on the doctos page for on delte create a extends prpops inetrface
}

const StaffCard: React.FC<StaffCardData> = ({ 
    staffName, 
    profession, 
    specialization, 
    staffID, 
    imageUrl, 
    onDelete 
}) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(staffID);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="flex items-center p-4 bg-white shadow rounded-lg relative">
                <div className="shrink-0">
                    <img
                        className="h-16 w-16 object-cover rounded-full"
                        src={imageUrl || img}
                        alt={`${staffName}'s profile`}
                    />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{staffName}</h3>
                    <p className="text-sm text-gray-500">{profession}</p>
                    <p className="text-sm text-gray-500">{specialization}</p>
                    <p className="text-sm text-gray-500">{staffID}</p>
                </div>
                <TiUserDeleteOutline  
                    className="absolute bottom-4 right-4 h-7 w-7 text-red-400 cursor-pointer"
                    aria-hidden="true"
                    onClick={handleDeleteClick}
                />
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg z-50">
                        <h3 className="text-lg font-semibold">Confirm Delete</h3>
                        <p>Are you sure you want to delete {staffName} from your database?</p>
                        <div className="flex justify-end mt-4">
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded mr-2"
                                onClick={handleConfirmDelete}
                            >
                                Yes
                            </button>
                            <button 
                                className="px-4 py-2 bg-gray-300 text-black rounded"
                                onClick={handleCancelDelete}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default StaffCard;
