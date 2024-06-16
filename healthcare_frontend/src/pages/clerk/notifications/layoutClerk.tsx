import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import { ClerkNotification } from '../../../components/cards/notifications/clerkNotificationCard'
import ClerkSidebar from '../../../components/sidebar/clerkSidebar';

interface ClerkLayoutProps {
    children: React.ReactNode;
}

const ClerkLayout: React.FC<ClerkLayoutProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<ClerkNotification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('clerk_notifications');
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
            <ClerkSidebar notificationCount={notificationCount} />
            {children}
        </>
    );
};

export default ClerkLayout;
