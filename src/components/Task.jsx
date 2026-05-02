import { useState } from "react";

const priorityDetails = {
  High: {
    label: "Wysoki",
    className: "bg-red-100 text-red-700",
  },
  Normal: {
    label: "Normalny",
    className: "bg-yellow-100 text-yellow-800",
  },
  Low: {
    label: "Niski",
    className: "bg-green-100 text-green-700",
  },
};

export function Task({ task, onDeleteTask }) {
  const { id, description, priority } = task;
  const [isTaskFinished, setIsTaskFinished] = useState(false);
  const buttonColorClasses = isTaskFinished
    ? "bg-orange-500 hover:bg-orange-700"
    : "bg-green-500 hover:bg-green-700";
  const priorityInfo = priorityDetails[priority];

  return (
    <div className="my-4 flex items-center justify-between gap-4 rounded-xl border p-4 transition hover:bg-gray-200">
      <div className="min-w-0">
        <span
          className={`block break-words ${
            isTaskFinished ? "line-through" : ""
          }`}
        >
          {description}
        </span>
        <span
          className={`mt-2 inline-flex h-6 items-center rounded-full px-2 text-xs font-medium ${priorityInfo.className}`}
        >
          {priorityInfo.label}
        </span>
      </div>

      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          className={`${buttonColorClasses} rounded-xl p-2 transition`}
          onClick={() => setIsTaskFinished((prev) => !prev)}
        >
          {isTaskFinished ? "Do zrobienia" : "Zrobione"}
        </button>
        <button
          type="button"
          className="rounded-xl bg-red-500 p-2 transition hover:bg-red-700"
          onClick={() => onDeleteTask(id)}
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
