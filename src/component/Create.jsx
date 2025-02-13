import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();

  const handleAdd = () => {
    if (!task.trim()) return;
    axios
      .post("https://todoify-backend.onrender.com/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="input-container">
      <input type="text" id="" onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;
