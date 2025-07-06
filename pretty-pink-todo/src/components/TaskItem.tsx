// Define the props expected by this component
type TaskProps = {
  title: string; // The task name or description
  done: boolean; // Whether the task is marked as completed
};

// Component to display an individual task
export function TaskItem({ title, done }: TaskProps) {
  return (
    <div className={`task-card ${done ? "done" : ""}`}> 
      {/* Conditionally adds the "done" class if the task is complete */}
      <span>
        {done ? "✅" : "⬜"} {title} // Shows a checkmark if done, box if not, and the task title
      </span>
    </div>
  );
}
