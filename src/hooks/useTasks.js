import { useState } from "react";
import { getPriorityOption } from "../constants/priorities";

function sortTasks(a, b) {
  const priorityDifference =
    getPriorityOption(a.priority).order - getPriorityOption(b.priority).order;

  if (priorityDifference !== 0) {
    return priorityDifference;
  }

  return a.description.localeCompare(b.description, "pl");
}

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(description, priority) {
    const newTask = {
      id: crypto.randomUUID(),
      description,
      priority,
      isFinished: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleTaskFinished(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isFinished: !task.isFinished } : task
      )
    );
  }

  return {
    tasks: [...tasks].sort(sortTasks),
    addTask,
    deleteTask,
    toggleTaskFinished,
  };
}
