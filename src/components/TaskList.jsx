import { Task } from "./Task";

export function TaskList({ tasks, onDeleteTask, onToggleTaskFinished }) {
  if (tasks.length === 0) {
    return <p className="mt-6 text-center text-slate-500">Brak zadań</p>;
  }

  return tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      onDeleteTask={onDeleteTask}
      onToggleTaskFinished={onToggleTaskFinished}
    />
  ));
}
