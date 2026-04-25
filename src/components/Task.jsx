import { useState } from "react";

export function Task({ taskDecription, priority }) {
  const [isTaskFinished, setIsTaskFinished] = useState(false);
  const buttonColorClasses = isTaskFinished
    ? "bg-orange-500 hover:bg-orange-700"
    : "bg-green-500 hover:bg-green-700";

  return (
    <div className="border rounded-xl my-4 hover:bg-gray-200 transition flex justify-between items-center p-4">
      <span className={isTaskFinished ? "line-through" : ""}>
        {taskDecription}
      </span>
      <div className="flex gap-2 ">
        <button
          type="button"
          className={`${buttonColorClasses} rounded-xl p-2 transition`}
          onClick={() => setIsTaskFinished((prev) => !prev)}
        >
          {isTaskFinished ? "Do zrobienia" : "Zrobione"}
        </button>
        <button
          type="button"
          className="bg-red-500 rounded-xl p-2 hover:bg-red-700 transition"
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
