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
    const [selectedAgent,setSelectedAgent] = useState(3)

    const [agentsList,setAgentList] = useState([])

    useEffect(async ()=>{
        const result = await axios("http://127.0.0.1:8100/users")
        setAgentList(result?.data.filter(item => item.userType === "agent"))
    },[])

    useEffect(async ()=>{
        const result = await axios("https://volet-maintenance.herokuapp.com/service-task/taskModel")
        setTaskModels(result.data)
    }, [])

    async function importNotif(){
        if(selectedTaskModel !== 0 && selectedAgent !== 0){
            const result = await axios.post("https://volet-maintenance.herokuapp.com/service-task/task"
            ,{
                "idAgent": selectedAgent,
                "idVehicle": panne.idVehicle,
                "taskTitle": "Panne : "+panne.description,
                "description": panne.description,
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
                {panne.description}
            </p>
            <p className="notification-subtitle">
                {new Date(panne.dateNotifPanne).toISOString().slice(0, 10)}
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
                    <p className="notif-modal-text">{"Description: "+panne.description}</p>
                    <p className="notif-modal-text">{"Date: "+ new Date(panne.dateNotifPanne).toISOString().slice(0, 10)}</p>
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
                            {agentsList?.map((agent) => (
                                <option key={agent.idUser} value={agent.idUser}>
                                {agent.firstName + ' ' + agent.lastName}
                                </option>
                            ))}
                    </select>
                    <div className="notif-buttons-wrapper">
                        <Button text="Annuler" mode="dark_mode" onClick={()=>{setModalOpen(false)}}/>
                        <Button text="Importer comme tache" mode="light_mode" onClick={()=>{importNotif()}}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}