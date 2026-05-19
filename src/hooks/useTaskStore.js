import { create } from "zustand";
import { getPriorityOption } from "../constants/priorities";
import { persist } from "zustand/middleware";

export function sortTasks(a, b) {
  const priorityDifference =
    getPriorityOption(a.priority).order - getPriorityOption(b.priority).order;

  if (priorityDifference !== 0) {
    return priorityDifference;
  }

  return a.description.localeCompare(b.description, "pl");
}

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (description, priority) => {
        const newTask = {
          id: crypto.randomUUID(),
          description,
          priority,
          isFinished: false,
        };
        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },
      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      toggleTaskFinished: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isFinished: !task.isFinished } : task,
          ),
        }));
      },
    }),
    {
      name: "todo-tasks",
    },
  ),
);
