import React, { useState, useEffect } from "react";
import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import AdminLayout from "../notifications/layoutAdmin";

interface Patient {
    id: number;
    patientFullName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    emergencyContacts: string;
    area: string;
    city: string;
    gender: string;
    status: "banned" | "unbanned";
}

const AdminPatients: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [filter, setFilter] = useState<"all" | "banned" | "unbanned">("all");

    useEffect(() => {
        // Mock data for patients
        const mockPatients: Patient[] = [
            {
                id: 1,
                patientFullName: "John Doe",
                email: "john@example.com",
                phoneNumber: "123-456-7890",
                dateOfBirth: "1990-01-01",
                emergencyContacts: "987-654-3210",
                area: "Area1",
                city: "City1",
                gender: "Male",
                status: "unbanned",
            },
            {
                id: 2,
                patientFullName: "Jane Doe",
                email: "jane@example.com",
                phoneNumber: "234-567-8901",
                dateOfBirth: "1992-02-02",
                emergencyContacts: "876-543-2109",
                area: "Area2",
                city: "City2",
                gender: "Female",
                status: "banned",
            },
        ];
        setPatients(mockPatients);
    }, []);

    const handleStatusChange = (id: number, status: "banned" | "unbanned") => {
        setPatients(prevPatients =>
            prevPatients.map(patient =>
                patient.id === id ? { ...patient, status } : patient
            )
        );
        // Here, you would also update the status in the backend when available
    };

    const filteredPatients = filter === "all" ? patients : patients.filter(patient => patient.status === filter);

    return (
        <>
            <Navbar isLoggedIn={true} />
            <SearchBar />
            <AdminLayout>
                <div className="p-5 sm:ml-64">
                    <div className="mb-5">
                        <select 
                            value={filter} 
                            onChange={(e) => setFilter(e.target.value as "all" | "banned" | "unbanned")}
                            className="rounded-md border border-gray-300 py-2 px-4"
                        >
                            <option value="all">All</option>
                            <option value="banned">Banned</option>
                            <option value="unbanned">Unbanned</option>
                        </select>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {filteredPatients.map(patient => (
                            <div key={patient.id} className="p-4 bg-white rounded shadow">
                                <h3 className="text-lg font-semibold">{patient.patientFullName}</h3>
                                <p>Email: {patient.email}</p>
                                <p>Phone: {patient.phoneNumber}</p>
                                <p>Date of Birth: {patient.dateOfBirth}</p>
                                <p>Emergency Contact: {patient.emergencyContacts}</p>
                                <p>Area: {patient.area}</p>
                                <p>City: {patient.city}</p>
                                <p>Gender: {patient.gender}</p>
                                <p>Status: <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${patient.status === 'unbanned' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {patient.status}
                                </span></p>
                                {patient.status === "unbanned" ? (
                                    <button 
                                        onClick={() => handleStatusChange(patient.id, "banned")}
                                        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                                    >
                                        Ban
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => handleStatusChange(patient.id, "unbanned")}
                                        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                                    >
                                        Unban
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

export default AdminPatients;
