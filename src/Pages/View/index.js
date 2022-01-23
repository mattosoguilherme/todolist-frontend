import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Api from "../../Api/api";
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import "./index.css"

const View = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTaskById(), [];
  });
  const { id } = useParams();
  console.log(id);

  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);

  const getTaskById = async () => {
    try {
      const req = await Api.fetchGetById(id);
      if (req.status === 400) {
        alert("Erro na aplicação, ID inválido");
      }
      if (req.status === 500) {
        console.error("Erro no servidor");
      }
      const task = await req.json().catch((err) => console.error("Erro:", err));
      setTask(task);
    } catch (err) {
      console.error("Erro", err);
    }
    
  };

  const handleDelete = async () => {
    const res = await Api.fetchDelete(id);
    const data = await res.json();
    alert(data.message);
    navigate("/");
  };
  let priority = "";
  if (task.prioridade === "Alta") {
    priority = "card text-white mb-4 bg-danger";
  } else if (task.prioridade === "Baixa") {
    priority = "card mb-4 text-white bg-primary";
  } else if (task.prioridade === "Média") {
    priority = "card text-white mb-4 bg-warning";
  } else {
    priority = "card mb-4";
  }

  return (
    <div className="container">
      <div className={priority}>
        <div className="card-header">
          {task.status} com prioridade {task.prioridade}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {task.titulo} <span>{task.prazo}</span>
          </h5>
          <p className="card-text">{task.descricao}</p>
        </div>
        <footer className="card-footer">
          <Link to={`/edit/${task._id}`} className="btn btn-outline-dark">
            Editar
          </Link>
          <button className="btn btn-outline-dark " onClick={abreModal}>
            Excluir
          </button>
        </footer>
      </div>
      <Modal className="modal" open={open} onClose={fechaModal} center>
        <h2 className="my-4">Deseja realmente excluir a tarefa ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger me-2" onClick={fechaModal}>
            Não
          </button>
          <button className="btn btn-success" onClick={handleDelete}>
            Sim
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default View;
