/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskView from "../../components/taskview/taskview";
import Button from "../../components/button/button"
import Modal from "react-modal"
import "./tasks.css";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  useEffect(async () => {
    const result = await axios("https://service-tasks.herokuapp.com/task");
    setTasks(result);
    return result;
  }, []);
  
  async function addTask(){
      const result = await axios
      .post("https://service-tasks.herokuapp.com/task"
      ,{
        "idAgent": 1,
        "idVehicle": 3,
        "taskTitle": "une tache ordinaire xx",
        "description": "ça est une tache ordinaire pour l'agent créé par ladmin",
        "idTaskState": 1,
        "assignmentDate": "2021-05-28T19:57:13.887Z",
        "endDate": null,
        "idTaskModel": 1,
        "usedEquipments": {
          "description": "J ai utiliser 20 litres d huile Quoi !",
          "quantity": 20,
          "equipment": "282d4458-aaeb-4e92-a674-12320b1de36a",
          "taskUUID": "282d4458-aaeb-4e92-a674-12320b1de46a"
        }
      })
      console.log(result)
  }

  return (
    tasks && (
      <div className="tasks-container">
        <div className="task-header-actions">
          <Button text="Ajouter tache" mode="light_mode" 
          onClick={()=>{setAddModalOpen(!isAddModalOpen)}}/>
        </div>
        <Modal 
            isOpen={isAddModalOpen}
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
                width: "60%",
                height: "80%",
                minHeight: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
                borderRadius: "15px",
                display: "grid",
                alignContent: "center",
                justifyContent: "center",
                overflow: "hidden"
              },
            }}>

      </Modal>
        <div className="tasks-header">
          <p className="task-header-text">taches</p>
          <p className="task-header-text">date</p>
          <p className="task-header-text">état</p>
        </div>
        {tasks?.data?.map((item, index) => (
          <TaskView task={item} key={item.uuid} />
        ))}
      </div>
    )
  );
};

export default Tasks;
