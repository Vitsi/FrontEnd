import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import { HcpNotification } from '../../../components/cards/notifications/hcpNotificationCard';
import HcpSidebar from '../../../components/sidebar/hcpSidebar';

interface HcpLayoutProps {
    children: React.ReactNode;
}

const HcpLayout: React.FC<HcpLayoutProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<HcpNotification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('hcp_notifications');
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
            <HcpSidebar notificationCount={notificationCount} />
            {children}
        </>
    );
};

export default HcpLayout;
