
import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/common/navbar';
import PatientSidebar from '../../../components/sidebar/patientSidebar';
import NotificationCard, { Notification } from '../../../components/cards/notifications/patientNotificationCard'; // Adjust path as necessary

const NotifPatients: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from localStorage
        const storedNotifications = localStorage.getItem('patient_notifications');
        if (storedNotifications) {
        //     setNotifications(JSON.parse(storedNotifications));
        // } else 
        // {
            // Simulate some mock notifications if none exist in localStorage
            const mockNotifications: Notification[] = [
                {
                    read: false,
                    notificationId: '1',
                    patientId: '123',
                    content: 'Your appointment is scheduled for tomorrow at 10 AM.',
                    type: 'Appointment',
                    date: new Date(),
                },
                {
                    read: false,
                    notificationId: '2',
                    patientId: '123',
                    content: 'Your lab results are ready.',
                    type: 'Lab Results',
                    date: new Date(),
                },
                {
                    read: false,
                    notificationId: '3',
                    patientId: '123',
                    content: 'Reminder: Annual check-up next week.',
                    type: 'Reminder',
                    date: new Date(),
                },
                {
                    read: true,
                    notificationId: '4',
                    patientId: '123',
                    content: 'Reminder: week.',
                    type: 'Reminder',
                    date: new Date(),
                },
            ];
            setNotifications(mockNotifications);
            localStorage.setItem('patient_notifications', JSON.stringify(mockNotifications));
        }
    }, []);

    useEffect(() => {
        // Update notification count in sidebar
        const unreadNotifications = notifications.filter(notification => !notification.read);
        const notificationCount = unreadNotifications.length;

        // Update notification count in the sidebar
        const badgeElement = document.getElementById('notification-badge');
        if (badgeElement) {
            badgeElement.textContent = notificationCount.toString();
        }
    }, [notifications]);

    const dismissNotification = (notificationId: string) => {
        const updatedNotifications = notifications.filter(notification => notification.notificationId !== notificationId);
        setNotifications(updatedNotifications);
        localStorage.setItem('patient_notifications', JSON.stringify(updatedNotifications));
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <PatientSidebar notificationCount={notifications.filter(notification => !notification.read).length} />            
                <div className="pt-10 p-5 sm:ml-64">
                <div className="grid gap-4 md:grid-cols-1 md:mt-20 sm:mt-14">
                    <h1 className="text-2xl font-bold mb-4">Notifications</h1>
                    <div className="space-y-4">
                        {notifications.length > 0 ? (
                            notifications.map(notification => (
                                <NotificationCard
                                    key={notification.notificationId}
                                    notification={notification}
                                    onDismiss={dismissNotification}
                                />
                            ))
                        ) : (
                            <p className="text-center">No notifications yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotifPatients;
