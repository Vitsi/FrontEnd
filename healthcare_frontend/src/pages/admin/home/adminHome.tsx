import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import AdminLayout from '../notifications/layoutAdmin';
import Chart from 'react-apexcharts';

// Define interfaces for data
interface EnrollmentData {
    month: string;
    enrolledUsers: number;
}

interface PerformanceData {
    month: string;
    performance: number;
}

interface UserData {
    patients: number;
    healthcareProviders: number;
    doctors: number;
}

const AdminHome: React.FC = () => {
    // State to hold data
    const [enrollmentData, setEnrollmentData] = useState<EnrollmentData[]>([]);
    const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
    const [userData, setUserData] = useState<UserData>({ patients: 0, healthcareProviders: 0, doctors: 0 });

    // Simulate data fetching
    useEffect(() => {
        fetchEnrollmentData();
        fetchPerformanceData();
        fetchUserData();
    }, []);

    const fetchEnrollmentData = async () => {
        // Simulate fetching data from backend
        const data: EnrollmentData[] = [
            { month: 'January', enrolledUsers: 65 },
            { month: 'February', enrolledUsers: 59 },
            { month: 'March', enrolledUsers: 80 },
            { month: 'April', enrolledUsers: 81 },
            { month: 'May', enrolledUsers: 56 },
            { month: 'June', enrolledUsers: 55 },
        ];
        setEnrollmentData(data);
    };

    const fetchPerformanceData = async () => {
        // Simulate fetching data from backend
        const data: PerformanceData[] = [
            { month: 'January', performance: 45 },
            { month: 'February', performance: 67 },
            { month: 'March', performance: 83 },
            { month: 'April', performance: 89 },
            { month: 'May', performance: 72 },
            { month: 'June', performance: 64 },
        ];
        setPerformanceData(data);
    };

    const fetchUserData = async () => {
        // Simulate fetching data from backend
        const data: UserData = {
            patients: 25,
            healthcareProviders: 25,
            doctors: 50,
        };
        setUserData(data);
    };

    // Chart options
    const userEnrollmentOptions: ApexCharts.ApexOptions = {
        chart: { type: 'bar' },
        series: [{ name: 'Enrolled Users', 
        data: enrollmentData.map(d => d.enrolledUsers) }],
        xaxis: { categories: enrollmentData.map(d => d.month) },
    };

    const platformPerformanceOptions: ApexCharts.ApexOptions = {
        chart: { type: 'line' },
        series: [{ name: 'Platform Performance', 
        data: performanceData.map(d => d.performance) }],
        xaxis: { categories: performanceData.map(d => d.month) },
    };

    const pieChartOptions: ApexCharts.ApexOptions = {
        chart: { type: 'pie' },
        labels: ['Patients', 'Healthcare Providers', 'Doctors'],
        series: [userData.patients, 
        userData.healthcareProviders, 
        userData.doctors],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: { width: 200 },
                legend: { position: 'bottom' },
            },
        }],
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <AdminLayout>
                <div className="pt-5 lg:ml-24 sm:ml-64 md:ml-24 sm:pl-5 pl-5">
                    <div className="md:ml-48 sm:pt-4 sm:mt-14 lg:mt-14">

                        <h2 className="text-2xl font-bold text-blue-600/75 dark:text-blue-500/75 mb-4">Comprehensive Analytics</h2>
                        <p className="mb-8">Gain insights into user engagement and overall platform performance with detailed analytics.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-4">User Enrollment</h3>
                                <Chart options={userEnrollmentOptions} series={userEnrollmentOptions.series} type="bar" height={350} />
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-4">Platform Performance</h3>
                                <Chart options={platformPerformanceOptions} series={platformPerformanceOptions.series} type="line" height={350} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-4">Number of Users</h3>
                                <Chart options={pieChartOptions} series={pieChartOptions.series} type="pie" height={350} width={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

export default AdminHome;
