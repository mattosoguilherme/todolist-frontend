import React from "react";
import Api from "../../Api/api";
import { useNavigate,Link } from "react-router-dom";
import "./index.css"

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const titulo = event.target.titulo.value;
    const descricao = event.target.descricao.value;
    const status = event.target.status.value;
    const prioridade = event.target.prioridade.value;
    const prazo = event.target.prazo.value;

    const task = {
      titulo,
      descricao,
      status,
      prioridade,
      prazo,
    };

    console.log(task);

    const res = await Api.fetchPost(task);
    const result = await res.json();

    alert(result.message);
    navigate("/");
  };

  return (
    <div className="index">
      <div>
        <h1>
          Insert <span className="badge bg-secondary">New Task</span>
        </h1>
      </div>

      <div>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="row g-4 "
          novalidate
        >
          <div className="col-md-4">
            <label htmlFor="titulo" className="form-label">
              Titulo
            </label>
            <input type="text" className="form-control" id="titulo" />
          </div>

          <div className="col-md-4">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea className="form-control" id="descricao" />
          </div>

          <div className="col-md-4">
            <label htmlFor="prioridade" className="form-label">
              Prioridade
            </label>
            <select className="form-control" id="prioridade">
              <option>Alta</option>
              <option>Média</option>
              <option>Baixa</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select className="form-control" id="status">
              <option>A Fazer</option>
              <option>Fazendo</option>
              <option>Feito</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="prazo" className="form-label">
              Prazo
            </label>
            <input type="date" className="form-control" id="prazo" />
          </div>

          <div className="row justify-content-around">
            <div className="row-4">
              <button className="btn btn-lg btn-outline-success " type="submit">
                Enviar
              </button>
              <Link to="/">
                <button className="btn btn-lg btn-outline-primary">Voltar</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
