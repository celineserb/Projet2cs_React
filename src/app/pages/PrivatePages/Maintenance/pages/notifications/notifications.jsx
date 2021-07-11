/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotificationView from '../../../../../conponents/notificationview/notificationview'
import './notifications.css'


export default function notifications(props){
    const [pannes, setPannes] = useState([])

    useEffect(async ()=>{
        const results = await axios("http://localhost:8220/getPannes")
        setPannes(results.data)
    },[])

    return(
        <div className="notification-container">
            <div className="notification-header">
                <p className="notification-header-text">Notifications</p>
            </div>
            {pannes?.map(panne => (
                <NotificationView key={panne.idPanne} panne={panne} isSolved={false}/>
            ))}
        </div>
    )
}