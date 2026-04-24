function App() {
  return (
    <main className="min-h-screen bg-sky-500 px-4 py-10 font-sans">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Do zrobienia</h1>
            <h2 className="mt-1 text-sm text-slate-500">5 zadań</h2>
          </div>
          <button
            type="button"
            className="h-11 w-11 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition"
          >
            +
          </button>
        </header>

        <div>
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
        </div>

        <div className="border rounded-xl my-4 hover:bg-gray-200 transition flex justify-between items-center p-4">
          <span>Wynieść śmieci</span>
          <div className="flex gap-2 ">
            <button
              type="button"
              className="bg-green-500 rounded-xl p-2 hover:bg-green-700 transition"
            >
              Zrobione
            </button>
            <button
              type="button"
              className="bg-red-500 rounded-xl p-2 hover:bg-red-700 transition"
            >
              Usuń
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
