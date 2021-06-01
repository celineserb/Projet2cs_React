import React from 'react'
import './agentview.css'
import image from '../../assets/profile_pic.png'

export default function AgentView(props){
    console.log(props.agent)
    return(
        <div className="agent-view-container">
            <div className="agent-info">
                <img src={image} alt="agent" className="agent-image"/>
                <div className="agent-divider">
                    <p className="agent-title">{props.agent.name + ' ' + props.agent.surename}</p>
                    <p className="agent-subtitle">updated 10mins ago</p>
                </div>
            </div>
            <div className="agent-divider">
                <p className="agent-title">Netoyer véhicule N200</p>
                <p className="agent-subtitle">20 mars 2021</p>
            </div>
        </div>
    )
}