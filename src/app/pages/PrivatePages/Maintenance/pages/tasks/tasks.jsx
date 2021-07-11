/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskView from "../../../../../conponents/taskview/taskview";
import Button from "../../../../../conponents/button/button";
import Modal from "react-modal";
import "./tasks.css";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const [vehicules, setVehicules] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isAddModalOpen2, setAddModalOpen2] = useState(false);
  const [stepDescription, setStepDescription] = useState("");
  const [steps, setSteps] = useState([]);
  const [taskModel, setTaskModel] = useState("");
  const [taskModels,setTaskModels] = useState([]);
  const [selectedTaskModel, setSelectedModel] = useState(1);
  const [selectedAgent, setSelectedAgent] = useState(100);
  const [selectedVehicule, setSelectedVehicule] = useState(3);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(async () => {
      const result = await axios("https://volet-maintenance.herokuapp.com/service-task/task");
      setTasks(result);
  }, []);

  
  useEffect(async ()=>{
    const result = await axios("https://volet-maintenance.herokuapp.com/service-task/taskModel")
    setTaskModels(result.data)
}, []);

  useEffect(async () => {
    const result = await axios("http://localhost:8000/vehicle");
    setVehicules(result.data.listVehicles)
  }, []);

  const [agentsList,setAgentList] = useState([])

  useEffect(async ()=>{
    const result = await axios("http://127.0.0.1:8100/users")
    setAgentList(result?.data.filter(item => item.userType === "agent"))
  },[])

  const addTaskModel = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      taskModelName: taskModel,
      steps: steps,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(raw);

    await fetch("https://volet-maintenance.herokuapp.com/service-task/taskModel", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(JSON.parse(result)))
      .catch((error) => console.log("error", error));
    setTaskModel("");
    setSteps([]);
    setAddModalOpen2(false);
  };

  async function addTask() {
    console.log()
    const result = await axios
      .post("https://volet-maintenance.herokuapp.com/service-task/task/"
      ,{"idAgent": selectedAgent,
      "idVehicle": selectedVehicule,
      "taskTitle": taskTitle,
      "description": taskDescription,
      "idTaskState": 1,
      "assignmentDate": new Date(Date.now()).toISOString(),
      "endDate": null,
      "idTaskModel": selectedTaskModel,
      "usedEquipments": null
    })
      console.log(result)
  }

  return (
    tasks && (
      <div className="tasks-container">
        <div className="task-header-actions">
          <Button
            text="Ajouter modèle"
            mode="light_mode"
            onClick={() => {
              setAddModalOpen2(!isAddModalOpen2);
            }}
          />
          <Button
            text="Ajouter tache"
            mode="light_mode"
            onClick={() => {
              setAddModalOpen(!isAddModalOpen);
            }}
          />
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
              margin: "auto",
              borderRadius: "15px",
              overflow: "hidden",
            },
          }}
        >
          <div className="add-task-modal">
            <p className="task-modal-title">Ajouter une tache</p>
            <br />
            <input
              className="modal-form-input"
              type="text"
              name="task-title"
              id="task-title"
              placeholder="Titre de tache"
              onChange={event => setTaskTitle(event.target.value)}
            />
            <br />
            <input
              className="modal-form-input"
              type="text"
              name="task-description"
              id="task-description"
              placeholder="Description"
              onChange={event => setTaskDescription(event.target.value)}
            />
            <br />
            <select
              className="modal-form-input"
              name="select-vehicule"
              id="select-vehicule"
              placeholder="Vehicule"
              onChange={event => setSelectedVehicule(event.target.value)}
            >
              {vehicules?.map((vehicule) => (
                <option key={vehicule.idVehicle} value={vehicule.idVehicle}>
                  {vehicule.vehiclebrand}
                </option>
              ))}
            </select>
            <br />
            <select
              className="modal-form-input"
              name="select-vehicule"
              id="select-vehicule"
              placeholder="Véhicule"
              onChange={event => setSelectedAgent(event.target.value)}
            >
              {agentsList?.map((agent) => (
                <option key={agent.idUser} value={agent.idUser}>
                  {agent.firstName + ' ' + agent.lastName}
                </option>
              ))}
            </select>
            <br />
            <select name="notif-task-model" id="notif-task-model" 
                    className="modal-form-input" 
                    placeholder="modèl de tache"
                    onChange={event => setSelectedModel(event.target.value)}>
                {taskModels.map(model => (
                    <option key={model.id} value={model.id}>{model.taskModelName}</option>
                ))}
            </select>
            <br />
            <div className="modal-buttons-holder">
              <Button
                text="Annuler"
                mode="dark_mode"
                onClick={() => {
                  setAddModalOpen(false);
                }}
              />
              <Button
                text="Confirmer"
                mode="light_mode"
                onClick={() => {
                  addTask();
                }}
              />
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isAddModalOpen2}
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
              height: "600px",
              margin: "auto",
              borderRadius: "15px",
              overflow: "hidden",
            },
          }}
        >
          <div className="add-task-modal">
            <p className="task-modal-title">Ajouter une tache modèle</p>
            <br />
            <input
              className="modal-form-input"
              type="text"
              name="task-title"
              id="task-title"
              value={taskModel}
              onChange={(e) => {
                setTaskModel(e.target.value);
              }}
              placeholder="Titre de la tache récurrente"
            />
            <br />

            {steps.map((s) => (
              <>
                <input
                  className="modal-form-input"
                  type="text"
                  name="task-steps"
                  id="task-steps"
                  value={s.step}
                  disabled
                  placeholder="Titre de la tache récurrente"
                />
                <br />
              </>
            ))}
            <div className="steps-container">
              <input
                className="modal-form-input"
                type="text"
                name="task-description"
                id="task-description"
                value={stepDescription}
                onChange={(e) => {
                  setStepDescription(e.target.value);
                }}
                placeholder="Description de l'étape"
              />
              <Button
                text="Ajouter"
                mode="light_mode"
                onClick={() => {
                  setSteps((prevSteps) => [
                    ...prevSteps,
                    {
                      step: stepDescription,
                    },
                  ]);
                  setStepDescription("");
                }}
              />
            </div>
            <br />
            <br />
            <div className="modal-buttons-holder">
              <Button
                text="Annuler"
                mode="dark_mode"
                onClick={() => {
                  setAddModalOpen2(false);
                }}
              />
              <Button
                text="Confirmer"
                mode="light_mode"
                onClick={() => {
                  addTaskModel();
                }}
              />
            </div>
          </div>
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
