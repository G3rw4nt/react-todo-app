import { useState } from "react";

export function NewTaskForm({ isFormShown, onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) return;

    onAddTask(description);
    setDescription("");
  }
  return (
    isFormShown && (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Dodaj nowe zadanie"
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
        />
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-xl hover:bg-sky-700 transition px-5 py-3"
        >
          Dodaj
        </button>
      </form>
    )
  );
}
