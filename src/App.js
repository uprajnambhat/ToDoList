import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const onTaskUpdate = (event) => {
    setNewTask(event.target.value);
  };
  const onNewTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("Please enter task");
      return;
    }

    if (tasks.includes(newTask)) {
      alert("task already there");
      return;
    }
    setTasks([...tasks, { name: newTask, done: false }]);
    setNewTask("");
  };

  const onTaskDone = (index) => {
    const updatedTasks = tasks.map((task, ind) =>
      ind === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={onTaskUpdate}
        ></input>
        <button onClick={onNewTask}>Add</button>
      </form>
      <div>
        {tasks.map((eachTask, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={eachTask.done}
                onChange={() => {
                  onTaskDone(index);
                }}
              ></input>
              <label
                style={{
                  textDecoration: eachTask.done ? "line-through" : "none",
                }}
              >
                {eachTask.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
