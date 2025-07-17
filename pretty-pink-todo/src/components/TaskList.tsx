import { useState } from 'react';
import { testData } from '../data';         // Static test data
import { TaskItem } from './TaskItem';      // Component to render each individual task

export function TaskList() {
  // State to store the current list of tasks
  const [tasks, setTasks] = useState(testData);

  // State to track what the user types in the input box
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to the list
  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObject = {
      id: Date.now(),          // simple unique id
      title: newTask,
      done: false,
    };

    setTasks([...tasks, newTaskObject]);  // Add the new task
    setNewTask('');                       // Clear input
  };

  return (
    <div className="task-list">
      {/* Input field and Add button */}
      <div className="add-task-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-button">
          Add
        </button>
      </div>

      {/* Display tasks */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          title={task.title}
          done={task.done}
        />
      ))}
    </div>
  );
}
