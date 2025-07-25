// src/App.tsx

import { useState } from "react";
import { testData } from "./data";

// Components
import { Header } from "./components/Header";
import TaskList from "./components/TaskList";

// Styles
import "./App.css";

// Define Task type
type Task = {
  id: number;
  title: string;
  done: boolean;
};


function App() {
  const [tasks, setTasks] = useState<Task[]>(testData); // 🔧 State is now typed

  // Handle toggling a task's "done" status
  const handleToggleDone = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  // Handle adding a new task
  const handleAddTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  // neTask and setNewTask function
  const [newTask, setNewTask] = useState("");


 return (
  <div className="app-container">
    <Header />

    {/*  Input + Add button */}
    <div className="add-task-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button
        onClick={() => {
          if (newTask.trim() !== "") {
            handleAddTask(newTask);
            setNewTask("");
          }
        }}
        className="add-task-button"
      >
        Add
      </button>
    </div>

    {/* Task list */}
    <TaskList
      tasks={tasks}
      onToggle={handleToggleDone}
      onDelete={handleDeleteTask}
      onAdd={handleAddTask}
    />
  </div>
);

}

export default App;

