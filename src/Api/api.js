const Api = {
  apiurl: "https://backend-app-tasks.herokuapp.com/tasks",
  fetchGetAll: () => fetch(Api.apiurl),
  fetchGetById: (id) => fetch(`${Api.apiurl}/${id}`),
  fetchPost: (data) => {
    return fetch(`${Api.apiurl}/adicionar`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  },
  fetchPut: (task, id) => {
    return fetch(`${Api.apiurl}/editar/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiurl}/deletar/${id}`, {
      method: "DELETE",
    });
  },
};

export default Api;
