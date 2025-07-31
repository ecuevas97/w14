// Define the shape of a task
type Task = {
  id: number;
  title: string;
  details: string;
  done: boolean;
};

// Define what props this component needs
type Props = {
  task: Task;                      // The task object itself
  onToggle: (id: number) => void;  // Function to toggle done/undone
  onDelete: (id: number) => void;  // Function to delete the task
};

// This component renders a single task item
export function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <div className="task-item">
      {/* Clicking toggles done/undone */}
      <span onClick={() => onToggle(task.id)} className="task-title">
        {task.done ? '✅' : '⬜'} {task.title}
      </span>

      {/* Render the task details below the title */}
      <p className="task-details">{task.details}</p>

      {/* Delete button */}
      <button onClick={() => onDelete(task.id)} className="delete-button">
        ✖
      </button>
    </div>
  );
}
