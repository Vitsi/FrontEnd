import React from 'react';
import { Howl } from 'howler';

const NotificationTester: React.FC = () => {
    const playNotificationSound = () => {
        const sound = new Howl({
            src: ['/sounds/notification.m4a'], 
        });
        sound.play();
    };

    return (
        <div>
            <button 
            className='btn btn-primary'
             onClick={playNotificationSound}>Play Notification Sound</button>
        </div>
    );
};

export default NotificationTester;
