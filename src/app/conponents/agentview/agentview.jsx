import React, {useState} from 'react'
import './agentview.css'
import image from '../../../assets/icons/profile_pic.png'
import Modal from 'react-modal';


Modal.setAppElement("#root");
export default function AgentView(props){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className="agent-view-container" onClick={()=>{setIsModalOpen(!isModalOpen)}}>
            <Modal 
            isOpen={isModalOpen}
            contentLabel="Task details"
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
                borderRadius: "15px",
                overflow: "hidden"
              },
            }}>

            </Modal>
            <div className="agent-info">
                <img src={image} alt="agent" className="agent-image"/>
                <div className="agent-divider">
                    <p className="agent-title">{props.agent.name + ' ' + props.agent.surename}</p>
                    <p className="agent-subtitle">updated 10mins ago</p>
                </div>
            </div>
            
        </div>
    )
}