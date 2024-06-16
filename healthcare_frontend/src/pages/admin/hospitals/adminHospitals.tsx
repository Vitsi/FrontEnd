import React, { useState, useEffect } from "react";
import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import AdminLayout from "../notifications/layoutAdmin";
import Pagination from "../../../components/common/pagination";  // Adjust the import path as needed

interface Hospital {
    id: number;
    hospitalFullName: string;
    email: string;
    phoneNumber: string;
    area: string;
    city: string;
    specialty: string;
    certification: string; 
    certificationType: "image" | "pdf"; 
    status: "pending" | "accepted" | "rejected";
}

const AdminHospitals: React.FC = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    useEffect(() => {
        // Mock data for hospitals
        const mockHospitals: Hospital[] = [
            {
                id: 1,
                hospitalFullName: "General Hospital",
                email: "general@hospital.com",
                phoneNumber: "123-456-7890",
                area: "Downtown",
                city: "City1",
                specialty: "General Medicine",
                certification: "path/to/certification1.pdf",
                certificationType: "pdf",
                status: "pending",
            },
            {
                id: 2,
                hospitalFullName: "City Hospital",
                email: "city@hospital.com",
                phoneNumber: "234-567-8901",
                area: "Uptown",
                city: "City2",
                specialty: "Cardiology",
                certification: "path/to/certification2.jpg",
                certificationType: "image",
                status: "accepted",
            },
            {
                id: 3,
                hospitalFullName: "Health Clinic",
                email: "clinic@health.com",
                phoneNumber: "345-678-9012",
                area: "Suburb",
                city: "City3",
                specialty: "Pediatrics",
                certification: "path/to/certification3.pdf",
                certificationType: "pdf",
                status: "rejected",
            },
            // Add more mock data if needed
        ];
        setHospitals(mockHospitals);
    }, []);

    const handleStatusChange = (id: number, status: "accepted" | "rejected") => {
        setHospitals(prevHospitals =>
            prevHospitals.map(hospital =>
                hospital.id === id ? { ...hospital, status } : hospital
            )
        );
        // Here, you would also update the status in the backend when available
    };

    const filteredHospitals = filter === "all" ? hospitals : hospitals.filter(hospital => hospital.status === filter);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentHospitals = filteredHospitals.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <SearchBar />
            <AdminLayout>
                <div className="p-5 sm:ml-64">
                    <div className="mb-5 flex justify-between items-center">
                        <select 
                            value={filter} 
                            onChange={(e) => setFilter(e.target.value as "all" | "pending" | "accepted" | "rejected")}
                            className="rounded-md border border-gray-300 py-2 px-4"
                        >
                            <option value="all">All</option>
                            <option value="pending">Pending</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {currentHospitals.map(hospital => (
                            <div key={hospital.id} className="p-4 bg-white rounded-lg shadow">
                                <h3 className="text-lg font-semibold mb-2">{hospital.hospitalFullName}</h3>
                                <p className="mb-1"><strong>Email:</strong> {hospital.email}</p>
                                <p className="mb-1"><strong>Phone:</strong> {hospital.phoneNumber}</p>
                                <p className="mb-1"><strong>Area:</strong> {hospital.area}</p>
                                <p className="mb-1"><strong>City:</strong> {hospital.city}</p>
                                <p className="mb-1"><strong>Specialty:</strong> {hospital.specialty}</p>
                                <p className="mb-4"><strong>Status:</strong> <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${hospital.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : hospital.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {hospital.status}
                                </span></p>
                                {hospital.certificationType === "image" ? (
                                    <img src={hospital.certification} alt="Certification" className="my-4 w-full h-auto" />
                                ) : (
                                    <a href={hospital.certification} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Certification (PDF)</a>
                                )}
                                <a href={hospital.certification} download className="text-blue-500 underline ml-2">Download Certification</a>
                                {hospital.status === "pending" && (
                                    <div className="mt-4">
                                        <button 
                                            onClick={() => handleStatusChange(hospital.id, "accepted")}
                                            className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600 transition"
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            onClick={() => handleStatusChange(hospital.id, "rejected")}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                        >
                                            Decline
                                        </button>
                                    </div>
                                )}
                                {hospital.status === "accepted" && (
                                    <div className="mt-4">
                                        <button 
                                            onClick={() => handleStatusChange(hospital.id, "rejected")}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                        >
                                            Revoke
                                        </button>
                                    </div>
                                )}
                                {hospital.status === "rejected" && (
                                    <div className="mt-4">
                                        <button 
                                            onClick={() => handleStatusChange(hospital.id, "accepted")}
                                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                        >
                                            Restore
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <Pagination 
                        currentPage={currentPage} 
                        totalCards={filteredHospitals.length} 
                        onPageChange={handlePageChange} 
                        cardsPerPage={cardsPerPage} 
                    />
                </div>
            </AdminLayout>
        </>
    );
}

export default AdminHospitals;
