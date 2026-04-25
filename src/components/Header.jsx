export function Header({ onToggleForm, isFormShown, numberOfTasks }) {
  return (
    <header className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Do zrobienia</h1>
        <h2 className="mt-1 text-sm text-slate-500">
          {numberOfTasks} {getTaskWord(numberOfTasks)}
        </h2>
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

function getTaskWord(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (count === 1) {
    return "zadanie";
  }

  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
  ) {
    return "zadania";
  }

  return "zadań";
}
