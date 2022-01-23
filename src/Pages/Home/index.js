import React from "react";
import AllTask from "../../Components/Structure/AllTasks/AllTasks";
import "./index.css"
const Home = () => {
  return (
    <div>
      <h1 className="title" >
        My<span class="badge bg-secondary">Tasks</span>
      </h1>
      <AllTask />
    </div>
  );
};

export default Home;
