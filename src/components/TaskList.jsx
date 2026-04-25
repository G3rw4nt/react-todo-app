import { Task } from "./Task";
export function TaskList({ tasks }) {
  const tasksElement = tasks.map((t) => (
    <Task taskDecription={t.description} priority={t.priority} />
  ));
  return tasksElement;
}
