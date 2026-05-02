import { useState } from "react";
const initialTasks = [
  { description: "Wynieść śmieci", priority: "High", id: 1 },
  { description: "Robić kurs", priority: "High", id: 2 },
  { description: "Pójść po mleko", priority: "High", id: 3 },
];
export function useTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(description) {
    const newTask = {
      description,
      priority: "High",
      id: Math.random(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return {
    tasks,
    addTask,
    deleteTask,
  };
}
