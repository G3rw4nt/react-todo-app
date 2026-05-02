import { useState } from "react";
import { PRIORITIES, priorityOptions } from "../constants/priorities";

export function NewTaskForm({ isFormShown, onAddTask }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(PRIORITIES.NORMAL);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedDescription = description.trim();
    if (!trimmedDescription) return;

    onAddTask(trimmedDescription, priority);
    setDescription("");
    setPriority(PRIORITIES.NORMAL);
  }

  return (
    isFormShown && (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Dodaj nowe zadanie"
            className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
          />

          <button
            type="submit"
            className="rounded-xl bg-sky-500 px-5 py-3 text-white transition hover:bg-sky-700"
          >
            Dodaj
          </button>
        </div>

        <div className="grid min-h-11 grid-cols-3 overflow-hidden rounded-xl border border-slate-200">
          {priorityOptions.map((option) => (
            <label key={option.value} className="min-w-0 cursor-pointer">
              <input
                type="radio"
                name="priority"
                value={option.value}
                checked={priority === option.value}
                onChange={(event) => setPriority(event.target.value)}
                className="peer sr-only"
              />

              <span
                className={`flex h-full min-h-11 items-center justify-center border-r border-slate-200 px-2 text-center text-sm font-medium leading-none text-slate-600 transition last:border-r-0 peer-checked:text-white ${option.formClassName}`}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </form>
    )
  );
}
