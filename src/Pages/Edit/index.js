import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Api from "../../Api/api";
import "./index.css"

const Edit = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    titulo: "",
    descricao: "",
    prazo: "",
    status: "",
    prioridade: "",
  });

  useEffect(() => {
    getTaskById(), [];
  });

  const { id } = useParams();
  const route = `/view/${id}`;

  const getTaskById = async () => {
    const req = await Api.fetchGetById(id);
    const task = await req.json();
    setTask(task);
  };

  const handleFieldsChange = (event) => {
    const taskEdit = {
      ...task,
    };
    taskEdit[event.target.name] = event.target.value;
    setTask(taskEdit);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await Api.fetchPut(task, id);
    const data = await res.json();
    alert(data.message);
    navigate(`/view/${id}`);
  };

  return (
    <div className="index">
      <div>
        <h1>
          Edition for <span className="badge bg-secondary"> Task</span>
        </h1>
      </div>

      <div>
        <form
          onSubmit={handleSubmit}
          className="row g-4"
          novalidate
        >
          <div className="col-md-4">
            <label htmlFor="titulo" className="form-label">
              Titulo
            </label>
            <input
              placeholder="Digite o titulo da tarefa"
              value={task.titulo}
              onChange={handleFieldsChange}
              type="text"
              className="form-control"
              name="titulo"
              id="titulo"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              value={task.descricao}
              onChange={handleFieldsChange}
              className="form-control"
              id="descricao"
              name="descricao"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="prioridade" className="form-label">
              Prioridade
            </label>
            <select
              onChange={handleFieldsChange}
              className="form-control"
              id="prioridade"
              name="prioridade"
              value={task.prioridade}
            >
              <option>Alta</option>
              <option>Média</option>
              <option>Baixa</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              onChange={handleFieldsChange}
              className="form-control"
              id="status"
              name="status"
              value={task.status}
            >
              <option>A Fazer</option>
              <option>Fazendo</option>
              <option>Feito</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="prazo" className="form-label">
              Prazo
            </label>
            <input
              value={task.prazo}
              onChange={handleFieldsChange}
              type="date"
              className="form-control"
              id="prazo"
              name="prazo"
            />
          </div>

          <div className="row justify-content-around">
            <div className="row-4">
              <button className="btn btn-outline-success btn-lg " type="submit">
                Salvar
              </button>
              <Link to={route}>
                <button className="btn btn-lg btn-outline-primary">Voltar</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
