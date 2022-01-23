import React, { useState, useEffect } from "react";
import Card from "../card/card";
import Api from "../../../Api/api";
import "./alltasks.css";

const AllTasks = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const res = await Api.fetchGetAll();

      if (res.status >= 400 && res.status < 600) {
        alert("Não foi possivel acessar dados, verifique sua aplicação");
      }
      const TaskApi = await res.json();

      console.log("RESPOSTA DA API", TaskApi);

      setTask(TaskApi);
    } catch (err) {
      console.error("ERRO:", err);
    }
  };

  return (
    <div className="AllTasks">
      {task.map((task) => (
        <Card key={task._id} priority={task.prioridade} task={task} />
      ))}
    </div>
  );
};

export default AllTasks;
