// Define the shape of a task
type Task = {
  id: number;
  title: string;
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
      {/* When you click this text, it toggles the task's done status */}
      <span onClick={() => onToggle(task.id)}>
        {task.done ? '✅' : '⬜'} {task.title}
      </span>

      {/* Delete button to remove task from the list */}
      <button onClick={() => onDelete(task.id)} className="delete-button">
        ✖
      </button>
    </div>
  );
}

