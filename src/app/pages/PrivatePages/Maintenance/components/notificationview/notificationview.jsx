import React from 'react'
import Button from '../button/button'
import './notificationview.css'


export default function notificationView(props){
    return(
        <div className="notification-view-container">
            <div className="notification-indicator"></div>
            <p className="notification-title">C'est une notification pour une tache</p>
            <p className="notification-subtitle">11:30 20/11/2020</p>
            <Button text="Détails" mode="light_mode"/>
        </div>
    )
}