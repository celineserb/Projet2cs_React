import React from 'react'
import './agentview.css'
import image from '../../../assets/icons/profile_pic.png'
import Modal from 'react-modal';


Modal.setAppElement("#root");
export default function AgentView(props){

    return(
        <div className="agent-view-container">
            <div className="agent-info">
                <img src={image} alt="agent" className="agent-image"/>
                <div className="agent-divider">
                    <p className="agent-title">{props.agent.firstName + ' ' + props.agent.lastName}</p>
                    <p className="agent-subtitle">Created at: {new Date(props.agent.creationDate).toISOString().slice(0, 10)}</p>
                </div>
            </div>
            
        </div>
    )
}