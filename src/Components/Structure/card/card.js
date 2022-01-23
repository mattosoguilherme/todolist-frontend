import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const task = props.task;
  let priority = props.priority;

  if (priority === "Alta") {
    priority = "card text-white mb-4 bg-danger";
  } else if (priority === "Baixa") {
    priority = "card mb-4 text-white bg-primary";
  } else if (priority === "Média") {
    priority = "card text-white mb-4 bg-warning";
  } else {
    priority = "card mb-4";
  }

  return (
    <Link to={`/view/${task._id}`} className={priority}>
      <div className="card-header">
        {task.status} com prioridade {task.prioridade}
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {task.titulo} <span>{task.prazo}</span>
        </h5>
        <p className="card-text">{task.descricao}</p>
      </div>
    </Link>
  );
};
export default Card;
