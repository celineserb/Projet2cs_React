/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskView from "../../components/taskview/taskview";
import "./tasks.css";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const result = await axios("https://service-tasks.herokuapp.com/task");
    setTasks(result);
    return result;
  }, []);
  console.log(tasks);

  return (
    tasks && (
      <div className="tasks-container">
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
