import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const API_URL = "https://todoify-backend.onrender.com";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    axios
      .get(API_URL + "/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  // Toggle status (mark as done)
  const handleEdit = (id) => {
    axios
      .put(API_URL + "/update/" + id)
      .then(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo._id === id ? { ...todo, status: true } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };

  // Delete a task
  const handleDelete = (id) => {
    axios
      .delete(API_URL + "/delete/" + id)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));
  };

  // Start editing a task
  const handleEditTask = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  // Update task in the backend
  const handleUpdateTask = () => {
    if (!editingText.trim()) return;

    axios
      .put(`${API_URL}/edit/${editingId}`, { task: editingText })
      .then(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo._id === editingId ? { ...todo, task: editingText } : todo
          )
        );
        setEditingId(null);
        setEditingText("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Todify</h2>
      <Create />

      {editingId && (
        <div className="edit-container">
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={handleUpdateTask}>Update</button>
          <button onClick={() => setEditingId(null)}>Cancel</button>
        </div>
      )}

      {todos.length === 0 ? (
        <h5 className="no-add">No todos yet. Add one above!</h5>
      ) : (
        todos.map((todo) => (
          <div className="todo-item" key={todo._id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.status ? (
                <BsFillCheckCircleFill className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.status ? "line_through" : ""}>{todo.task}</p>
            </div>

            <div>
              <span>
                <FaEdit
                  className="icon"
                  onClick={() => handleEditTask(todo._id, todo.task)}
                />
              </span>
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
