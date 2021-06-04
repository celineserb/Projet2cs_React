/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Button from '../button/button'
import Modal from 'react-modal'
import axios from 'axios'
import './notificationview.css'


Modal.setAppElement("#root")
export default function NotificationView(props){
    const panne = props.panne
    const [isModalOpen, setModalOpen] = useState(false)
    const [taskModels,setTaskModels] = useState([])
    const [selectedTaskModel, setSelectedModel] = useState(0)
    const [selectedAgent,setSelectedAgent] = useState(100)

    useEffect(async ()=>{
        const result = await axios("https://service-tasks.herokuapp.com/taskModel")
        setTaskModels(result.data)
    }, [])


    async function importNotif(){
        if(selectedTaskModel !== 0 && selectedAgent !== 0){
            const result = await axios.post("https://service-tasks.herokuapp.com/task"
            ,{
                "idAgent": 100,
                "idVehicle": panne.idVehicle,
                "taskTitle": panne.signalType,
                "description": panne.message,
                "idTaskState": 2,
                "endDate": null,
                "idTaskModel": selectedTaskModel,
                "usedEquipments": null
            })

            console.log(result)

            if(result.status === 200){
                setModalOpen(!isModalOpen)
                setSelectedModel(0)
                setSelectedAgent(100)
            }
        }
    }

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
            <Button text="importer" mode="light_mode" onClick={()=>{setModalOpen(!isModalOpen)}}/>
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
                    <p className="notif-modal-text">{"Date: "+ new Date(panne.sent_at).toISOString().slice(0, 10)}</p>
                    <p className="notif-modal-text">{"Véhicule: "+panne.vehiclebrand}</p>
                    <select name="notif-task-model" id="notif-task-model" 
                            className="modal-form-input" 
                            placeholder="modèl de tache"
                            onChange={event => setSelectedModel(event.target.value)}>
                        {taskModels.map(model => (
                            <option key={model.id} value={model.id}>{model.taskModelName}</option>
                        ))}
                    </select>
                    <br />
                    <select name="notif-agent-model" 
                            id="notif-agent-model"
                            className="modal-form-input">

                    </select>
                    <div className="notif-buttons-wrapper">
                        <Button text="Confirmer" mode="dark_mode" onClick={()=>{setModalOpen(false)}}/>
                        <Button text="Importer comme tache" mode="light_mode" onClick={()=>{importNotif()}}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}