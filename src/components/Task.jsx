import { getPriorityOption } from "../constants/priorities";
import { useTaskStore } from "../hooks/useTaskStore";
export function Task({ task }) {
  const { id, description, priority, isFinished } = task;
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleTaskFinished = useTaskStore((state) => state.toggleTaskFinished);
  const priorityInfo = getPriorityOption(priority);
  const buttonColorClasses = isFinished
    ? "bg-orange-500 hover:bg-orange-700"
    : "bg-green-500 hover:bg-green-700";

  return (
    <div className="my-4 flex items-center justify-between gap-4 rounded-xl border p-4 transition hover:bg-gray-200">
      <div className="min-w-0">
        <span
          className={`block break-words ${isFinished ? "line-through" : ""}`}
        >
          {description}
        </span>
        <span
          className={`mt-2 inline-flex h-6 items-center rounded-full px-2 text-xs font-medium ${priorityInfo.badgeClassName}`}
        >
          {priorityInfo.label}
        </span>
      </div>

      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          className={`${buttonColorClasses} rounded-xl p-2 transition`}
          onClick={() => toggleTaskFinished(id)}
        >
          {isFinished ? "Do zrobienia" : "Zrobione"}
        </button>
        <button
          type="button"
          className="rounded-xl bg-red-500 p-2 transition hover:bg-red-700"
          onClick={() => deleteTask(id)}
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
