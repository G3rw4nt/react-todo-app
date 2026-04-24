export function NewTaskForm() {
  return (
    <form className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
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
  );
}
