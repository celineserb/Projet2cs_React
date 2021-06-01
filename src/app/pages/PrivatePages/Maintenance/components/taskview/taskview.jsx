/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Modal from "react-modal";
import Button from '../button/button'
import "./taskview.css";

Modal.setAppElement("#root");
export default function taskView(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskState, setTaskState] = useState(props.task.idTaskState);

  function closeModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="task-view-container" onClick={() => setIsModalOpen(!isModalOpen)}>
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
            height: "40%",
            minHeight: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: "15px",
            display: "grid",
            alignContent: "center",
            justifyContent: "center"
          },
        }}>
          <div className="task-modal">
            <p className="task-modal-title">{props.task.taskTitle}</p><br />
            <p className="task-modal-subtitle">{props.task.description}</p><br />
            <p className="task-modal-text">{new Date(props.task.assignmentDate).toISOString().slice(0, 10)}</p><br />
            <div className={(taskState === 1? "progress": (taskState === 2? "affected" : "ended")) + " task-state"}>
              {taskState === 1 ? "En cours" : (taskState === 2 ? "Affecté" : "Terminé")}
            </div><br /><br />
            <Button text="confirmer" mode="light_mode" onClick={()=>{closeModal()}}/>
          </div>
      </Modal>
      <div className="task-bubble"></div>
      <p className="task-title">{props.task.taskTitle}</p>
      <p className="task-subtitle">
        {new Date(props.task.assignmentDate).toISOString().slice(0, 10)}
      </p>
      <div className={(taskState === 1? "thex-progress": (taskState === 2? "affected" : "ended")) + " task-state"}>
        {taskState === 1 ? "En cours" : (taskState === 2 ? "Affecté" : "Terminé")}
      </div>
    </div>
  );
}
