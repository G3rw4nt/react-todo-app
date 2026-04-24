export function Task() {
  return (
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
  );
}
