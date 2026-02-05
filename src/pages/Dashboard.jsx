import React, { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import TaskList from "../componets/TaskList";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responce = await fetch("http://localhost:3000/task");
      const data =  await responce.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authData");
    localStorage.removeItem("Data");
    //localStorage.clear()
    navigate("/login");
  };
  return (
    <div>
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <h1>My Tasks</h1>
      <TaskList  tasks={tasks}/>
    </div>
  );
};

export default Dashboard;
