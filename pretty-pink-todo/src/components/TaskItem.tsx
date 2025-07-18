// Define the shape of a single task using TypeScript
type Task = {
  id: number;
  title: string;
  done: boolean;
};

// Define the props this component receives: a task object and a function to toggle its "done" status
type Props = {
  task: Task;
  onToggle: (id: number) => void;
};

// TaskItem component renders a single to-do item
export function TaskItem({ task, onToggle }: Props) {
  return (
    // The entire task item is clickable to toggle completion
    <div className="task-item" onClick={() => onToggle(task.id)}>
      {/* Show a checkmark if done, or an empty box if not, followed by the task title */}
      {task.done ? '✅' : '⬜'} {task.title}
    </div>
  );
}
