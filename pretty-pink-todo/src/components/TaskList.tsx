// Import test data and the TaskItem component
import { tasks } from "../data";           // Static test data
import { TaskItem } from "./TaskItem";     // Component to render each individual task

// Component to display a list of all tasks
export function TaskList() {
  return (
    <div className="task-list"> 
      {tasks.map(task => (       // Loop through each task in the array
        <TaskItem                // Render a TaskItem for each task
          key={task.id}          // Provide a unique key for React rendering
          title={task.title}     // Pass the task title as a prop
          done={task.done}       // Pass the task's done status as a prop
        />
      ))}
    </div>
  );
}
