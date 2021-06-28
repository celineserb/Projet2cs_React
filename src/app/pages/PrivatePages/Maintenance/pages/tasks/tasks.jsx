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

  useEffect(async () => {
    const result = await axios("https://volet-maintenance.herokuapp.com/service-task/task");
    setTasks(result);
    return result;
  }, []);

  useEffect(async () => {
    const result = await axios("http://localhost:8000/vehicle");
    setVehicules(result.data.listVehicles);
    return result;
  }, []);

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

    await fetch("https://service-tasks.herokuapp.com/taskModel", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(JSON.parse(result)))
      .catch((error) => console.log("error", error));
    setTaskModel("");
    setSteps([]);
    setAddModalOpen2(false);
  };

  async function addTask() {
    /*const result = await axios
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
      console.log(result)*/
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
            />
            <br />
            <input
              className="modal-form-input"
              type="text"
              name="task-description"
              id="task-description"
              placeholder="Description"
            />
            <br />
            <select
              className="modal-form-input"
              name="select-agent"
              id="select-agent"
              placeholder="Agent"
            >
              {vehicules?.map((vehicule) => (
                <option key={vehicule.idVehicle} value={vehicule.vehiclebrand}>
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
            ></select>
            <br />
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
