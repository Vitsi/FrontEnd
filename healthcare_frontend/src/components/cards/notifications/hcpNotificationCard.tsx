import React from 'react';
import { MdClose } from 'react-icons/md';

export interface HcpNotification {
    read: boolean;
    notificationId: string;
    hcpId: string;
    content: string;
    type: string;
    date: Date;
}


interface HcpNotificationCardProps {
    notification: HcpNotification;
    onDismiss: (notificationId: string) => void;
}

const NotificationCard: React.FC<HcpNotificationCardProps> = ({ notification, onDismiss }) => {
    const handleDismiss = () => {
        onDismiss(notification.notificationId);
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{notification.content}</h2>
                <button onClick={handleDismiss} className="text-gray-500 hover:text-gray-700">
                    <MdClose className="h-5 w-5" />
                </button>
            </div>
            <p>Type: {notification.type}</p>
            <p>Date: {notification.date.toLocaleDateString()}</p>
        </div>
    );
};

export default NotificationCard;
