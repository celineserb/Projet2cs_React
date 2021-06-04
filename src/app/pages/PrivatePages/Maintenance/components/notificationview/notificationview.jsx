import React, { useState } from 'react'
import Button from '../button/button'
import Modal from 'react-modal'
import './notificationview.css'


Modal.setAppElement("#root")
export default function NotificationView(props){
    const panne = props.panne
    const [isModalOpen, setModalOpen] = useState(false)

    return(
        <div className="notification-view-container">
            <div className={props.isSolved+"-panne notification-indicator"}></div>
            <p className={(props.isSolved ? "fine-title" : "bold-title") 
                        + " notification-title" }>
                {panne.message}
            </p>
            <p className="notification-subtitle">
                {new Date(panne.sent_at).toISOString().slice(0, 10)}
            </p>
            <Button text="Détails" mode="light_mode" onClick={()=>{setModalOpen(!isModalOpen)}}/>
            <Modal
                isOpen={isModalOpen}
                contentLabel="Notification details"
                closeTimeoutMS={150}
                style={{
                overlay: {
                    backgroundColor: "rgba(1,1,1,0.5)",
                    display: "grid",
                    gridAutoColumns: "auto",
                    justifyContent: "center",
                },
                content: {
                    width: "50%",
                    height: "70%",
                    margin: "auto",
                    color: "#333",
                    borderRadius: "15px",
                    overflow: "hidden"
                },
                }}>
                <div className="notif-modal-wrapper">
                    <p className="bold-title notif-modal-title">Détails de la panne</p>
                    <p className="notif-modal-text">{"Description: "+panne.message}</p>
                    <p className="notif-modal-text">{"Source: "+ panne.sourceType}</p>
                    <p className="notif-modal-text">{"Date: "+ new Date(panne.sent_at).toISOString().slice(0, 10)}</p>
                    <p className="notif-modal-text">{"Véhicule: "+panne.vehiclebrand}</p>
                    <div className="notif-buttons-wrapper">
                        <Button text="Confirmer" mode="dark_mode" onClick={()=>{setModalOpen(false)}}/>
                        <Button text="Importer comme tache" mode="light_mode"/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}