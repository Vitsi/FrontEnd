import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import { Notification } from '../../../components/cards/notifications/labNotificationCard'; 
import LabTechSidebar from '../../../components/sidebar/labTechSidebar';

interface LabTechLayoutProps {
    children: React.ReactNode;
}

const LabTechLayout: React.FC<LabTechLayoutProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('labTech_notifications');
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
            <LabTechSidebar notificationCount={notificationCount} />
            {children}
        </>
    );
};

export default LabTechLayout;
