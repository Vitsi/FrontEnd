import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import { DoctorNotification } from '../../../components/cards/notifications/doctorNoftification';
import DoctorSidebar from '../../../components/sidebar/doctorSidebar';

interface DoctorLayoutProps {
    children: React.ReactNode;
}

const DoctorLayout: React.FC<DoctorLayoutProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<DoctorNotification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('doctor_notifications');
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
            <DoctorSidebar  notificationCount={notificationCount} />
            {children}
        </>
    );
};

export default DoctorLayout;
