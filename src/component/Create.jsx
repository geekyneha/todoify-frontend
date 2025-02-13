import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://todoify-backend.onrender.com";

const Create = ({ setTodos }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;

    axios
      .post(`${API_URL}/add`, { task })
      .then((result) => {
        setTodos((prevTodos) => [...prevTodos, result.data]); // Update state
        setTask(""); // Clear input
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;
