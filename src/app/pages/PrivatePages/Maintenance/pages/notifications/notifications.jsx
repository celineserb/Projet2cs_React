/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotificationView from '../../../../../conponents/notificationview/notificationview'
import './notifications.css'


export default function notifications(props){
    const [pannes, setPannes] = useState([])
    const [solvedPannes, setSolvedPannes] = useState([])

    useEffect(async ()=>{
        const results = await axios("http://localhost:8111/panne_signals")
        setPannes(results.data.signalsNotTreated)
        setSolvedPannes(results.data.signlasTreated)
    },[])

    return(
        <div className="notification-container">
            <div className="notification-header">
                <p className="notification-header-text">Notifications</p>
            </div>
            {pannes?.map(panne => (
                <NotificationView key={panne.idSignal} panne={panne} isSolved={false}/>
            ))}
            {solvedPannes?.map(panne => (
                <NotificationView key={panne.idSignal} panne={panne} isSolved={true}/>
            ))}
        </div>
    )
}