import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import { Notification } from '../../../components/cards/notifications/patientNotificationCard'; // Adjust path as necessary
import PatientSidebar from '../../../components/sidebar/patientSidebar';

interface PatientLayoutProps {
    children: React.ReactNode;
}

const PatientLayout: React.FC<PatientLayoutProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('patient_notifications');
        if (storedNotifications) {
            setNotifications(JSON.parse(storedNotifications));
        } 
    }, []);

    console.log('Notifications:', notifications);

    const notificationCount = notifications.filter(notification => !notification.read).length;

    console.log('Notification Count:', notificationCount);

    return (
        <>
            <Navbar isLoggedIn={true} />
            <PatientSidebar notificationCount={notificationCount} />
            {children}
        </>
    );
};

export default PatientLayout;
