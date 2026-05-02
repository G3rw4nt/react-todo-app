import { useState } from "react";

const priorityOrder = {
  High: 1,
  Normal: 2,
  Low: 3,
};

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(description, priority) {
    const newTask = {
      id: crypto.randomUUID(),
      description,
      priority,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityDifference =
      priorityOrder[a.priority] - priorityOrder[b.priority];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return a.description.localeCompare(b.description, "pl");
  });

  return {
    tasks: sortedTasks,
    addTask,
    deleteTask,
  };
}
