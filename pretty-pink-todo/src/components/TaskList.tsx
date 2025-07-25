// src/components/TaskList.tsx

import { useState } from "react";
import { TaskItem } from "./TaskItem";

// Define Task and Props
type Task = {
  id: number;
  title: string;
  done: boolean;
};

type Props = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onAdd: (title: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete, onAdd }: Props) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = () => {
    if (newTask.trim() === "") return;
    onAdd(newTask);
    setNewTask(""); // Clear input after adding
  };

  return (
    <div className="task-list">
     

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
