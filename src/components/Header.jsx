export function Header({ onToggleForm, isFormShown }) {
  return (
    <header className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Do zrobienia</h1>
        <h2 className="mt-1 text-sm text-slate-500">5 zadań</h2>
      </div>
      <button
        onClick={onToggleForm}
        type="button"
        className="h-11 w-11 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition"
      >
        <strong>{isFormShown ? "-" : "+"}</strong>
      </button>
    </header>
  );
}
