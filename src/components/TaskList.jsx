import { Task } from "./Task";
export function TaskList({ tasks, onDeleteTask }) {
  const tasksElement = tasks.map((task) => (
    <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
  ));
  return tasksElement;
}
