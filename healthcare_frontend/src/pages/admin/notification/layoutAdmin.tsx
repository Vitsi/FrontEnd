import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import { AdminNotification } from '../../../components/cards/notifications/adminNotificationCard';
import AdminSidebar from '../../../components/sidebar/adminSidebar';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<AdminNotification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('admin_notifications');
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
            <AdminSidebar  notificationCount={notificationCount} />
            {children}
        </>
    );
};

export default AdminLayout;
