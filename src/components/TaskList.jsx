import { useMemo } from "react";
import { Task } from "./Task";
import { sortTasks, useTaskStore } from "../hooks/useTaskStore";
export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  const sortedTasks = useMemo(() => [...tasks].sort(sortTasks), [tasks]);
  if (tasks.length === 0) {
    return <p className="mt-6 text-center text-slate-500">Brak zadań</p>;
  }

  return sortedTasks.map((task) => <Task key={task.id} task={task} />);
}
