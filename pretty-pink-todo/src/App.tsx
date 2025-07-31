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
  details: string;  // ✅ Added details to match new form
  done: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(testData); // ✅ Uses test data as initial state

  // Toggle task completion
  const handleToggleDone = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  //  Delete a task
  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  //  Add a new task using title + details
  const handleAddTask = (title: string, details: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      details,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  //  Form state
  const [newTask, setNewTask] = useState("");         // Title input
  const [taskDetails, setTaskDetails] = useState(""); // Details input

  return (
    <div className="app-container">
      <Header />

      {/* Create form with 2 inputs */}
      <div className="add-task-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />

        <input
          type="text"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          placeholder="Add task details..."
          className="task-input"
        />

        <button
          onClick={() => {
            if (newTask.trim() !== "") {
              handleAddTask(newTask, taskDetails);  // ✅ Now passing both values!
              setNewTask("");                        // ✅ Reset form
              setTaskDetails("");
            }
          }}
          className="add-task-button"
        >
          Add
        </button>
      </div>

      {/*  Render list with props */}
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

