import React from 'react'
import NotificationView from '../../components/notificationview/notificationview'
import './notifications.css'


export default function notifications(props){
    return(
        <div className="notification-container">
            <div className="notification-header">
                <p className="notification-header-text">Notifications</p>
            </div>
            <NotificationView />
            <NotificationView />
            <NotificationView />
            <NotificationView />
            <NotificationView />
            <NotificationView />
            <NotificationView />
            <NotificationView />
            <NotificationView />
        </div>
    )
}