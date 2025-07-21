import { useState } from 'react';
import { testData } from '../data';
import { TaskItem } from './TaskItem';

export function TaskList() {
  // State for tasks and new task input
  const [tasks, setTasks] = useState(testData);
  const [newTask, setNewTask] = useState('');

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObject = {
      id: Date.now(),
      title: newTask,
      done: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  // Handle toggling a task's "done" status
  const handleToggleDone = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  // ✅ Handle deleting a task
  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="task-list">
      {/* Add task input form */}
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

      {/* Display the list of tasks */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggleDone}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}
