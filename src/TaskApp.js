import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/index";
import Home from "./Pages/Home/index";
import View from "./Pages/View/index";
import Edit from "./Pages/Edit/index";

const TaskApp = () => {
  return (
    <>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default TaskApp;
