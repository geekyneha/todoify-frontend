import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

const API_URL = "https://todoify-backend.onrender.com";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(API_URL + "/update/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(API_URL + "/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Todify</h2>
      <Create />
      {todos.length === 0 ? (
        <h1>No to do added!</h1>
      ) : (
        todos.map((todo) => (
          <div className="todo-item">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.status ? (
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
              ) : (
                <BsCircleFill className="icon" />
              )}

              <p className={todo.status ? "line_through" : ""}>{todo.task}</p>
            </div>

            <div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
