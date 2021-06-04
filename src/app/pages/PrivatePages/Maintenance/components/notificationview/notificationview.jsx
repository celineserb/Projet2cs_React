import React from 'react'
import Button from '../button/button'
import './notificationview.css'


export default function notificationView(props){
    const panne = props.panne
    return(
        <div className="notification-view-container">
            <div className="notification-indicator"></div>
            <p className="notification-title">{panne.message}</p>
            <p className="notification-subtitle">{new Date(panne.sent_at).toISOString().slice(0, 10)}</p>
            <Button text="Détails" mode="light_mode"/>
        </div>
    )
}